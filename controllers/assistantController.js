import { Assistant } from "../models/assistantModel.js";

const createAssistant = async (req, res) => {
  try {
    const newAssistant = new Assistant(req.body);
    newAssistant.save();
    return res.status(200).json("Assistant created successfully");
  } catch (error) {
    res.status(500).json("Error while creating the assistant");
  }
};

export { createAssistant };
