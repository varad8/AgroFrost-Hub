import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserBooking() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const endpoint = `${import.meta.env.VITE_KEY}`;
  const [bookingData, setBookingData] = useState([]);
  const [bookingFilterData, setBookingFilterData] = useState([]);
  const [filters, setFilters] = useState({
    b_id: "",
    c_id: "",
    cs_id: "",
    checkInDate: "",
    checkOutDate: "",
  });

  useEffect(() => {
    const fetchBooking = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          `${endpoint}/user/booking/${user?.uid}`,
          config
        );

        setBookingData(response?.data);
        setBookingFilterData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(error?.response?.data?.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    };

    fetchBooking();
  }, [user?.id]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const filteredData = bookingData.filter((booking) => {
      return (
        booking.b_id.includes(filters.b_id) &&
        booking.c_id.includes(filters.c_id) &&
        booking.cs_id.includes(filters.cs_id) &&
        booking.b_checkInDate.includes(filters.checkInDate) &&
        booking.b_checkOutDate.includes(filters.checkOutDate)
      );
    });
    setBookingFilterData(filteredData);
  }, [filters, bookingData]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="mb-5">
        <h2 className="font-inter font-medium text-xl border-b border-gray-300 mb-2 px-2 py-2">
          My Bookings
        </h2>
        <div className="mx-4">
          {/* Show Filter Inputs */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              name="b_id"
              value={filters.b_id}
              onChange={handleFilterChange}
              placeholder="Booking ID"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="c_id"
              value={filters.c_id}
              onChange={handleFilterChange}
              placeholder="Customer ID"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="cs_id"
              value={filters.cs_id}
              onChange={handleFilterChange}
              placeholder="CS ID"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="checkInDate"
              value={filters.checkInDate}
              onChange={handleFilterChange}
              placeholder="Check-In Date"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="checkOutDate"
              value={filters.checkOutDate}
              onChange={handleFilterChange}
              placeholder="Check-Out Date"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
        {/* Display Bookings */}
        <div className="mx-4 mt-4">
          {/* Display bookingFilterData */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {bookingFilterData.map((booking) => (
              <div
                key={booking._id}
                className="border hover:bg-greenpallete border-greenpallete bg-white rounded-md p-4 mb-4 shadow-lg"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src="/src/assets/boxes.png"
                    className="w-24 h-24 bg-blue-50 p-3 rounded-md"
                    alt="box"
                  />
                  <div>
                    <p>Booking ID: {booking.b_id}</p>
                    <p>Customer ID: {booking.c_id}</p>
                    <p>CS ID: {booking.cs_id}</p>
                    <p>Check-In Date: {booking.b_checkInDate}</p>
                    <p>Check-Out Date: {booking.b_checkOutDate}</p>
                    <p>Goods Quantity: {booking.b_goodsQuantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBooking;
