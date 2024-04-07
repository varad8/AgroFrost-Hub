const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { authenticateToken } = require("../middlewares/authentication");
const Customer = require("../model/Customer");
const ColdStorage = require("../model/ColdStorage");
const Razorpay = require("razorpay");
const moment = require("moment");
const Booking = require("../model/Booking");
const Payment = require("../model/Payment");
const { startOfMonth, endOfMonth } = require("date-fns");
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY, SECRET_KEY } = process.env;
const nodemailer = require("nodemailer");
const { EMAIL_PASSWORD, YOUR_EMAIL } = process.env;

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: YOUR_EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

const router = express.Router();

const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

//Genrate Customer ID
async function generateCustomerId() {
  const lastRegistration = await Customer.findOne().sort({
    c_id: -1,
  });
  let nextRegistrationNumber = 1;
  if (lastRegistration) {
    const lastRegistrationNumber = parseInt(
      lastRegistration.c_id.split("-")[1]
    );
    if (!isNaN(lastRegistrationNumber)) {
      nextRegistrationNumber = lastRegistrationNumber + 1;
    }
  }

  return `CSREG-${nextRegistrationNumber}`;
}

//Generate Booking Id
async function generateBookingId() {
  const lastBooking = await Booking.findOne().sort({
    b_id: -1,
  });
  let nextBookingNumber = 1;
  if (lastBooking) {
    const lastBookingNumber = parseInt(lastBooking.b_id.split("-")[1]);
    if (!isNaN(lastBookingNumber)) {
      nextBookingNumber = lastBookingNumber + 1;
    }
  }

  return `BKID-${nextBookingNumber}`;
}

// Customer Registration
router.post("/register", async (req, res) => {
  try {
    const {
      c_fullName,
      c_email,
      c_contactNo,
      c_address,
      c_password,
      c_confirmPass,
    } = req.body;

    // Check if any required fields are empty
    if (
      !c_fullName ||
      !c_email ||
      !c_contactNo ||
      !c_address ||
      !c_password ||
      !c_confirmPass
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (c_password !== c_confirmPass) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the email or contact number already exists
    const existingCustomer = await Customer.findOne({
      $or: [{ c_email: c_email }, { c_contactNo: c_contactNo }],
    });
    if (existingCustomer) {
      return res
        .status(400)
        .json({ error: "Email or contact number already exists" });
    }

    const hashedPassword = await bcrypt.hash(c_password, 10);
    const c_id = await generateCustomerId();

    // Create a new customer
    const newCustomer = new Customer({
      c_id,
      c_fullName,
      c_email,
      c_contactNo,
      c_address,
      c_password: hashedPassword,
    });

    // Save the new customer to the database
    await newCustomer.save();

    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    console.error("Error registering customer:", error);
    res.status(500).json({ error: error.message });
  }
});

//customer login
router.post("/login", async (req, res) => {
  try {
    const { c_email, c_password } = req.body;

    // Validate required fields
    if (!c_email || !c_password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user by email
    const user = await Customer.findOne({ c_email });

    // If cold storage not found or owner_password doesn't match
    if (!user || !(await bcrypt.compare(c_password, user.c_password))) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "24h",
    });

    const userdata = {
      id: user._id,
      username: user.c_fullName,
      email: user.c_email,
      role: user.role,
      uid: user.c_id,
    };

    // Send token in response
    res.json({ token: token, user: userdata });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//customer update details
router.put("/:customerId", authenticateToken, async (req, res) => {
  try {
    const { c_fullName, c_contactNo, c_address } = req.body;
    const customerId = req.params.customerId;

    // Validate contact number
    if (c_contactNo && !/^\d{10}$/.test(c_contactNo)) {
      return res
        .status(400)
        .json({ error: "Contact number must be a 10-digit number" });
    }

    // Update customer fields
    const updateFields = {};
    if (c_fullName) {
      updateFields.c_fullName = c_fullName;
    }
    if (c_contactNo) {
      updateFields.c_contactNo = c_contactNo;
    }
    if (c_address) {
      updateFields.c_address = c_address;
    }

    // Find and update the customer
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      updateFields,
      { new: true }
    );

    // Check if the customer exists
    if (!updatedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json({ message: "Customer updated successfully" });
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//customer get
router.get("/:customerId", async (req, res) => {
  try {
    const customerId = req.params.customerId;

    // Find the customer by ID
    const customer = await Customer.findById(customerId).select("-c_password");

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    // Exclude the password field and send the customer data
    res.status(200).json(customer);
  } catch (error) {
    console.error("Error retrieving customer:", error);
    res.status(500).json({ error: error.message });
  }
});

/**--------------------------[Storage Router for Customer Only]------------------------ */
//fetching image from uploads folder
router.get("/images/:image", async (req, res) => {
  try {
    const fileName = req.params.image;

    if (!fileName) {
      return res.status(404).json({ error: "file name not found" });
    }
    // Construct the file path to the profile picture
    const filePath = path.join(__dirname, `../uploads/${fileName}`);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).json({ error: "Image not found" });
      }

      // Send the file as a response
      res.sendFile(filePath);
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//Fetching all storages only approved
router.get("/storage/all", authenticateToken, async (req, res) => {
  try {
    const storage = await ColdStorage.find({ cs_status: true }).populate({
      path: "owner_ref",
      model: "ColdStorageOwner",
      select: "-owner_password",
    });

    res.status(200).json(storage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetching Storage Details by cs_id
router.get("/storage/:csid", authenticateToken, async (req, res) => {
  const { csid } = req.params; // Retrieve csid from request params
  try {
    const storage = await ColdStorage.findOne({ cs_id: csid }).populate({
      path: "owner_ref",
      model: "ColdStorageOwner",
      select: "-owner_password",
    });

    if (!storage) {
      return res.status(404).json({ error: "Storage not found" });
    }

    res.status(200).json(storage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/createorder", authenticateToken, async (req, res) => {
  const { b_checkInDate, b_checkOutDate, b_goodsQuantity, cs_price } = req.body;

  // Validate input data
  if (!b_checkInDate || !b_checkOutDate || !b_goodsQuantity || !cs_price) {
    return res.status(400).json({ error: "Data is empty" });
  }

  // Validate check-in and check-out dates
  const checkInDate = moment(b_checkInDate);
  const checkOutDate = moment(b_checkOutDate);
  const currentDate = moment();

  if (!checkInDate.isValid() || !checkOutDate.isValid()) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  if (
    checkInDate.isSameOrBefore(currentDate) ||
    checkOutDate.isSameOrBefore(currentDate)
  ) {
    return res
      .status(400)
      .json({ error: "Check-in and check-out dates should be in the future" });
  }

  if (checkOutDate.isSameOrBefore(checkInDate)) {
    return res
      .status(400)
      .json({ error: "Check-out date should be after check-in date" });
  }

  // Calculate the number of days
  const durationInDays = checkOutDate.diff(checkInDate, "days");

  // Calculate the total amount
  const totalPrice = cs_price * durationInDays;

  const options = {
    amount: totalPrice * 100, // Convert to paisa (Indian currency)
    currency: "INR",
    receipt: "#1",
    payment_capture: 1,
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//save payment
router.post("/savepayment", authenticateToken, async (req, res) => {
  const {
    amount,
    p_id,
    cs_id,
    c_id,
    b_checkInDate,
    b_checkOutDate,
    b_goodsQuantity,
  } = req.body;

  if (
    !amount ||
    !p_id ||
    !cs_id ||
    !c_id ||
    !b_checkInDate ||
    !b_checkOutDate ||
    !b_goodsQuantity
  ) {
    return res.status(400).json({ error: "Fields can't be blank" });
  }

  // Convert the amount to the correct value (assuming amount is in cents)
  const p_amount = parseFloat(amount) / 100;

  try {
    // Generate a booking ID
    const b_id = await generateBookingId();

    console.log(b_id);

    // Save the booking details
    const booking = new Booking({
      b_id,
      cs_id,
      c_id,
      b_checkInDate,
      b_checkOutDate,
      b_goodsQuantity,
    });
    await booking.save();

    // Save the payment details
    const payment = new Payment({
      b_id,
      p_id,
      p_amount,
      cs_id,
      c_id,
      b_checkInDate,
      b_checkOutDate,
      b_goodsQuantity,
    });
    await payment.save();

    res.status(200).json({
      message: "Payment and booking saved successfully",
    });
  } catch (error) {
    console.error("Error saving payment and booking:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving payment and booking" });
  }
});

/**--------------------------[Booking Router for Customer Only]------------------------ */
router.get("/booking/:c_id", authenticateToken, async (req, res) => {
  try {
    const { c_id } = req.params;

    const bookings = await Booking.find({ c_id });

    if (!bookings) {
      return res.status(404).json({ error: "Bookings not found" });
    }

    // Convert ISO date strings to readable local format
    const bookingsWithReadableDates = bookings.map((booking) => ({
      ...booking.toObject(),
      b_checkInDate: new Date(booking.b_checkInDate).toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      ),
      b_checkOutDate: new Date(booking.b_checkOutDate).toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      ),
    }));

    res.status(200).json(bookingsWithReadableDates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/payment/:c_id", authenticateToken, async (req, res) => {
  try {
    const { c_id } = req.params;

    const payments = await Payment.find({ c_id });

    if (!payments) {
      return res.status(404).json({ error: "Payments not found" });
    }

    // Convert ISO date strings to readable local format
    const paymentWithRedableDates = payments.map((payment) => ({
      ...payment.toObject(),
      p_date: new Date(payment.p_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    }));

    res.status(200).json(paymentWithRedableDates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/chartdata/:c_id", authenticateToken, async (req, res) => {
  const { c_id } = req.params;

  try {
    // Get the start and end dates of the current month
    const currentDate = new Date();
    const startDateOfMonth = startOfMonth(currentDate);
    const endDateOfMonth = endOfMonth(currentDate);

    // Aggregate bookings based on check-in date month and year wise
    const bookingData = await Booking.aggregate([
      {
        $match: { c_id }, // Filter by c_id
      },
      {
        $group: {
          _id: {
            month: { $month: "$b_checkInDate" },
            year: { $year: "$b_checkInDate" },
          },
          count: { $sum: 1 }, // Count the bookings
        },
      },
      {
        $project: {
          _id: 0, // Exclude _id field
          month: "$_id.month",
          year: "$_id.year",
          count: 1,
        },
      },
    ]);

    // Aggregate payments made this month
    const paymentData = await Payment.aggregate([
      {
        $match: {
          c_id,
          p_date: { $gte: startDateOfMonth, $lte: endDateOfMonth }, // Filter by cs_id and payment date within the current month
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$p_date" },
            year: { $year: "$p_date" },
          },
          totalPayment: { $sum: "$p_amount" }, // Calculate total payment made this month
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id.month",
          year: "$_id.year",
          totalPayment: 1,
        },
      },
    ]);

    // Get the last booking
    const lastBooking = await Booking.findOne({ c_id })
      .sort({ b_checkInDate: -1 })
      .limit(1);

    //get last payment
    const lastPayment = await Payment.findOne({ c_id })
      .sort({ p_date: -1 })
      .limit(1);

    // Get the total booking count
    const totalBookingCount = await Booking.countDocuments({ c_id });

    res.status(200).json({
      bookingData,
      paymentData,
      lastBooking,
      totalBookingCount,
      lastPayment,
    });
  } catch (error) {
    console.error("Error fetching chart data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route handler for sending emails
router.post("/mail/sendEmail", async (req, res) => {
  try {
    // Extract email details from the request body
    const { email, message, name } = req.body;

    const subject = "Contact Support Requested";

    // Construct HTML email body
    const htmlBody = `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Define email options
    const mailOptions = {
      from: YOUR_EMAIL,
      to: email, // Set the recipient email address here
      subject,
      html: htmlBody, // Set HTML content
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
