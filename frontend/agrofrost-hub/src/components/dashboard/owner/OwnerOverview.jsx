import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bar, Line, Doughnut, PolarArea, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function OwnerOverview() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const endpoint = `${import.meta.env.VITE_KEY}`;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchColdStorageProfile = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          `${endpoint}/owner/storage/${user?.uid}`,
          config
        );

        fetchChartData(response?.data?.cs_id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchColdStorageProfile();
  }, [user?.id]);

  const fetchChartData = async (cs_id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `${endpoint}/owner/chartdata/${cs_id}`,
        config
      );

      setChartData(response?.data);
      console.log(response?.data);
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

  const bookingLabels = chartData?.bookingData?.map(
    (data) => `${data.month}/${data.year}`
  );
  const bookingData = chartData?.bookingData?.map((data) => data.count);

  const paymentLabels = chartData?.paymentData?.map(
    (data) => `${data.month}/${data.year}`
  );
  const paymentData = chartData?.paymentData?.map((data) => data.totalPayment);

  const bookingChartData = {
    labels: bookingLabels,
    datasets: [
      {
        label: "Booking Count",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: bookingData,
      },
    ],
  };

  const paymentChartData = {
    labels: paymentLabels,
    datasets: [
      {
        label: "Total Payment",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        data: paymentData,
      },
    ],
  };

  const combinedChartData = {
    labels: bookingLabels,
    datasets: [
      {
        label: "Booking Count",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: bookingData,
      },
      {
        label: "Total Payment",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        data: paymentData,
      },
    ],
  };

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
          Dashboard
        </h2>
        <div className="mx-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Booking Count */}
            <div className="flex gap-6 p-3 rounded-md items-center shadow-lg border border-greenpallete bg-white hover:bg-greenpallete">
              <img src="/src/assets/inventory.png" className="w-24 h-24" />
              <div>
                <p className="text-3xl font-bold">
                  {chartData?.totalBookingCount}
                </p>
                <p>Total Booking</p>
              </div>
            </div>

            {/* Last Booking */}
            <div className="flex gap-6 p-3 rounded-md items-center shadow-lg border border-greenpallete bg-white hover:bg-greenpallete">
              <img src="/src/assets/booking.png" className="w-24 h-24" />
              <div>
                <p className="text-3xl font-bold">
                  {chartData?.lastBooking?.b_id}
                </p>
                <p>Last Booking</p>
              </div>
            </div>

            {/* Last Payment */}
            <div className="flex gap-6 p-3 rounded-md items-center shadow-lg border border-greenpallete bg-white hover:bg-greenpallete">
              <img src="/src/assets/creditcard.png" className="w-24 h-24" />
              <div>
                <p className="text-3xl font-bold break-words text-wrap md:text-2xl lg:text-3xl xl:text-4xl">
                  {chartData?.lastPayment?.c_id}
                </p>
                <p>Last Payment by</p>
              </div>
            </div>
          </div>

          {/* Chart Grid Payment Data and Booking Data */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Booking Data Chart */}
            <div className="p-4 bg-white rounded-lg border border-gray-300 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Booking Data</h3>
              {bookingChartData && <Bar data={bookingChartData} />}
            </div>

            {/* Payment Data Chart */}
            <div className="p-4 bg-white rounded-lg border border-gray-300 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Payment Data</h3>
              {paymentChartData && <Bar data={paymentChartData} />}
            </div>

            <div className="p-4 bg-white rounded-lg border border-gray-300 shadow-md mt-8">
              <h3 className="text-lg font-semibold mb-2">Combined Data</h3>
              {combinedChartData && <Line data={combinedChartData} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerOverview;
