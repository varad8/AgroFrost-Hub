import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPayment() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const endpoint = `${import.meta.env.VITE_KEY}`;
  const [paymentData, setPaymentData] = useState([]);
  const [filterPaymentData, setFilterPaymentData] = useState([]);
  const [filters, setFilters] = useState({
    p_id: "",
    b_id: "",
    cs_id: "",
    c_id: "",
    p_date: "",
  });

  useEffect(() => {
    const fetchPayments = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          `${endpoint}/admin/payment/all`,
          config
        );

        setPaymentData(response?.data);
        setFilterPaymentData(response?.data);
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

    fetchPayments();
  }, [user?.id]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const filteredData = paymentData.filter((payment) => {
      return (
        payment.p_id.includes(filters.p_id) &&
        payment.b_id.includes(filters.b_id) &&
        payment.cs_id.includes(filters.cs_id) &&
        payment.c_id.includes(filters.c_id) &&
        payment.p_date.includes(filters.p_date)
      );
    });
    setFilterPaymentData(filteredData);
  }, [filters, paymentData]);

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
          All Payments
        </h2>

        <div className="mx-4">
          {/* Show Filter Inputs */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              name="p_id"
              value={filters.p_id}
              onChange={handleFilterChange}
              placeholder="Payment ID"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
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
              name="cs_id"
              value={filters.cs_id}
              onChange={handleFilterChange}
              placeholder="CS ID"
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
              name="p_date"
              value={filters.p_date}
              onChange={handleFilterChange}
              placeholder="Payment Date"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
        {/* Display Payments */}
        <div className="mx-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Display filterPaymentData */}
            {filterPaymentData.map((payment) => (
              <div
                key={payment._id}
                className="flex gap-3 shadow-lg items-center border border-greenpallete bg-white hover:bg-greenpallete rounded-md p-4 mb-4"
              >
                <img
                  src="/src/assets/creditcard.png"
                  className="w-24 h-24"
                  alt="payment done"
                />
                <div>
                  <p>Payment ID: {payment.p_id}</p>
                  <p>Booking ID: {payment.b_id}</p>
                  <p>CS ID: {payment.cs_id}</p>
                  <p>Customer ID: {payment.c_id}</p>
                  <p>Payment Date: {payment.p_date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPayment;
