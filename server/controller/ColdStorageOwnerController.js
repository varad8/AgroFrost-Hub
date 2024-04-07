const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = process.env;
const ColdStorageOwner = require("../model/ColdStorageOwner");
const { authenticateToken } = require("../middlewares/authentication");
const ColdStorage = require("../model/ColdStorage");
const Payment = require("../model/Payment");
const Booking = require("../model/Booking");
const { startOfMonth, endOfMonth } = require("date-fns");

const router = express.Router();

// Define multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for file uploads
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    // Generate a timestamp
    const timestamp = Date.now();
    // Get the file extension
    const ext = path.extname(file.originalname);
    // Set the filename to be the timestamp, underscore, and file extension
    const filename = `${timestamp}_${file.originalname}`;
    cb(null, filename);
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage }).single("file");

//Function to genrate owner id of cold storage owner
async function generateColdStorageOwnerId() {
  const lastRegistration = await ColdStorageOwner.findOne().sort({
    owner_id: -1,
  });
  let nextRegistrationNumber = 1;
  if (lastRegistration) {
    const lastRegistrationNumber = parseInt(
      lastRegistration.owner_id.split("-")[1]
    );
    if (!isNaN(lastRegistrationNumber)) {
      nextRegistrationNumber = lastRegistrationNumber + 1;
    }
  }

  return `CSOREG-${nextRegistrationNumber}`;
}

//Function to generate cold storage id
async function generateColdStorageId() {
  const lastCSId = await ColdStorage.findOne().sort({
    cs_id: -1,
  });
  let nextColdId = 1;
  if (lastCSId) {
    const lastColdId = parseInt(lastCSId.cs_id.split("-")[1]);
    if (!isNaN(lastColdId)) {
      nextColdId = lastColdId + 1;
    }
  }

  return `CS-${nextColdId}`;
}

//cold storage account registration
router.post("/register", async (req, res) => {
  try {
    upload(req, res, async (err) => {
      const {
        owner_fullName,
        owner_email,
        owner_contactNo,
        owner_password,
        owner_confirmPass,
      } = req.body;

      console.log(req.body, req.file);

      if (
        !owner_fullName ||
        !owner_email ||
        !owner_contactNo ||
        !owner_password ||
        !owner_confirmPass
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (owner_contactNo.toString().length !== 10) {
        return res
          .status(400)
          .json({ error: "Mobile number must be 10 digits" });
      }

      if (owner_password !== owner_confirmPass) {
        return res.status(400).json({ error: "Passwords do not match" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "File not selected" });
      }

      if (err) {
        console.error("Error uploading file:", err);
        return res.status(500).json({ error: "Failed to upload QR code" });
      }

      const existingColdOwner = await ColdStorageOwner.findOne({
        $or: [{ owner_email }, { owner_contactNo: owner_contactNo }],
      });

      if (existingColdOwner) {
        return res.status(400).json({
          error:
            "Cold storage owner already exists (email or contact number already registered)",
        });
      }

      const hashedPassword = await bcrypt.hash(owner_password, 10);

      if (!req.file) {
        return res.status(400).json({ error: "QR Code is required" });
      }

      const fileName = req.file.filename;
      const ownerId = await generateColdStorageOwnerId();

      const newColdStorageOwner = new ColdStorageOwner({
        owner_contactNo: owner_contactNo,
        owner_email: owner_email,
        owner_fullName: owner_fullName,
        owner_password: hashedPassword,
        owner_qrCode: fileName,
        owner_id: ownerId,
        role: "owner",
      });

      await newColdStorageOwner.save();
      res.status(201).json({ message: "Registration successful" });
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Failed to register cold storage owner" });
  }
});

router.put("/register/details", authenticateToken, async (req, res) => {
  try {
    const { owner_fullName, owner_id, owner_contactNo } = req.body;

    if (!owner_fullName || !owner_id || !owner_contactNo) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate contact number
    if (owner_contactNo && !/^\d{10}$/.test(owner_contactNo)) {
      return res
        .status(400)
        .json({ error: "Contact number must be a 10-digit number" });
    }

    // Find the existing cold storage owner
    const existingColdOwner = await ColdStorageOwner.findOneAndUpdate(
      { owner_id: owner_id },
      {
        owner_fullName,
        owner_contactNo,
      },
      { new: true } // To return the updated document
    );

    if (!existingColdOwner) {
      return res.status(400).json({
        error: "Cold Storage Owner Profile Not Found",
      });
    }

    res.status(201).json({
      message: "Registration details updated",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ error: "Failed update to register cold storage owner" });
  }
});

//cold storage owner login
router.post("/login", async (req, res) => {
  try {
    const { owner_email, owner_password } = req.body;

    // Validate required fields
    if (!owner_email || !owner_password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user by email
    const user = await ColdStorageOwner.findOne({ owner_email });

    // If cold storage not found or owner_password doesn't match
    if (!user || !(await bcrypt.compare(owner_password, user.owner_password))) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "24h",
    });

    const userdata = {
      id: user._id,
      username: user.owner_fullName,
      email: user.owner_email,
      role: user.role,
      uid: user.owner_id,
    };

    // Send token in response
    res.json({ token: token, user: userdata });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//Get Cold Storage Profile Details
router.get("/:ownerid", async (req, res) => {
  try {
    const ownerid = req.params.ownerid;

    // Find the owner by ID
    const owner = await ColdStorageOwner.findById(ownerid).select(
      "-owner_password"
    );

    if (!owner) {
      return res.status(404).json({ error: "owner not found" });
    }

    // Exclude the password field and send the customer data
    res.status(200).json(owner);
  } catch (error) {
    console.error("Error retrieving owner:", error);
    res.status(500).json({ error: error.message });
  }
});

//cold storage new details save
router.post("/create/coldstorage", authenticateToken, async (req, res) => {
  try {
    const {
      owner_id,
      cs_name,
      cs_area,
      cs_capacity,
      cs_address,
      cs_price,
      cs_time,
      owner_ref,
    } = req.body;

    if (
      !owner_id ||
      !cs_name ||
      !cs_area ||
      !cs_capacity ||
      !cs_address ||
      !cs_price ||
      !cs_time ||
      !owner_ref
    ) {
      return res.status(400).json({ error: "Fields cant be empty" });
    }

    const csOwner = await ColdStorageOwner.findOne({ owner_id: owner_id });

    if (!csOwner) {
      return res
        .status(400)
        .json({ error: "Cold Storage Owner Not Found please register" });
    }

    const csalreadyexist = await ColdStorage.findOne({ owner_id: owner_id });

    if (csalreadyexist) {
      return res.status(400).json({ error: "Already exist cold storage" });
    }

    const cs_id = await generateColdStorageId();

    const coldStorage = new ColdStorage({
      owner_id: owner_id,
      cs_name: cs_name,
      cs_price: cs_price,
      cs_time: cs_time,
      cs_address: cs_address,
      cs_area: cs_area,
      cs_capacity: cs_capacity,
      owner_ref: owner_ref,
      cs_id: cs_id,
      cs_status: false,
    });

    await coldStorage.save();

    res.status(201).json({ message: "Cold storage added successfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//Get Cold Storage by
router.get("/storage/:owner_id", authenticateToken, async (req, res) => {
  try {
    const { owner_id } = req.params;
    const storage = await ColdStorage.findOne({ owner_id });

    res.status(200).json(storage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update details of a cold storage facility
router.put(
  "/update/coldstorage/:cs_id",
  authenticateToken,
  async (req, res) => {
    try {
      const { cs_name, cs_area, cs_capacity, cs_address, cs_price, cs_time } =
        req.body;
      const { cs_id } = req.params;

      // Check if required fields are provided
      if (
        !cs_name ||
        !cs_area ||
        !cs_capacity ||
        !cs_address ||
        !cs_price ||
        !cs_time
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Update the cold storage details using findOneAndUpdate
      const updatedColdStorage = await ColdStorage.findOneAndUpdate(
        { cs_id },
        {
          $set: {
            cs_name,
            cs_area,
            cs_capacity,
            cs_address,
            cs_price,
            cs_time,
          },
        },
        { new: true }
      );

      // Check if the cold storage is found and updated
      if (!updatedColdStorage) {
        return res.status(404).json({ error: "Cold storage not found" });
      }

      res
        .status(200)
        .json({ message: "Cold storage details updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update cs_image for a specific cs_id
router.put(
  "/update/coldstorage/image/:cs_id",
  authenticateToken,
  async (req, res) => {
    try {
      // Handle file upload
      upload(req, res, async (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to upload image" });
        }

        const { cs_id } = req.params;

        // Check if cs_id exists
        const coldStorage = await ColdStorage.findOne({ cs_id });

        if (!coldStorage) {
          return res.status(404).json({ error: "Cold storage not found" });
        }

        let updateFields = {};

        // Delete previous image if exists
        if (coldStorage.cs_image) {
          const imagePath = path.join(
            __dirname,
            "../uploads",
            coldStorage.cs_image
          );
          // Check if file exists before attempting to delete
          if (fs.existsSync(imagePath)) {
            // Delete the file
            fs.unlinkSync(imagePath);
          }
          // Set cs_image to null after deleting the file
          updateFields.cs_image = null;
        }

        // Save new image filename
        if (req.file) {
          updateFields.cs_image = req.file.filename;
        }

        // Update the cold storage document
        await ColdStorage.findOneAndUpdate({ cs_id }, updateFields);

        res
          .status(200)
          .json({ message: "Cold storage image updated successfully" });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

/**-----------------------------[Router For Booking and Payment]---------------------- */
router.get("/booking/all/:cs_id", authenticateToken, async (req, res) => {
  try {
    const { cs_id } = req.params;

    const bookings = await Booking.find({ cs_id });

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

router.get("/payment/all/:cs_id", authenticateToken, async (req, res) => {
  try {
    const { cs_id } = req.params;

    const payments = await Payment.find({ cs_id });

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

router.get("/chartdata/:cs_id", authenticateToken, async (req, res) => {
  const { cs_id } = req.params;

  try {
    // Get the start and end dates of the current month
    const currentDate = new Date();
    const startDateOfMonth = startOfMonth(currentDate);
    const endDateOfMonth = endOfMonth(currentDate);

    // Aggregate bookings based on check-in date month and year wise
    const bookingData = await Booking.aggregate([
      {
        $match: { cs_id }, // Filter by cs_id
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
          cs_id,
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
    const lastBooking = await Booking.findOne({ cs_id })
      .sort({ b_checkInDate: -1 })
      .limit(1);

    //get last payment
    const lastPayment = await Payment.findOne({ cs_id })
      .sort({ p_date: -1 })
      .limit(1);

    // Get the total booking count
    const totalBookingCount = await Booking.countDocuments({ cs_id });

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

module.exports = router;
