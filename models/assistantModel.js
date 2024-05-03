import mongoose, { Schema } from "mongoose";

const assistantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Assistant name is required"],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  salary: {
    type: Number,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  department: {
    type: String,
  },
  role: {
    type: String,
  },
});

modulr.exports = mongoose.model("Assistant", assistantSchema);
