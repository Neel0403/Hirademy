import mongoose, { Schema } from "mongoose";

const assistantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Assistant name is required"],
  },
  mobile: {
    type: String,
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

export const Assistant = mongoose.model("Assistant", assistantSchema);