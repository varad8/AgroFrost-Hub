const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  b_id: {
    type: String,
    required: true,
    unique: true,
  },
  cs_id: {
    type: String,
    required: true,
  },
  c_id: {
    type: String,
    required: true,
  },
  b_checkInDate: {
    type: Date,
    required: true,
  },
  b_checkOutDate: {
    type: Date,
    required: true,
  },
  b_goodsQuantity: {
    type: Number,
    required: true,
    max: 15,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;