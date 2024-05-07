import { Assistant } from "../models/assistantModel.js";

const createAssistant = async (req, res) => {
  try {
    console.log("Received POST request to create assistant:", req.body);
    const newAssistant = new Assistant(req.body);
    newAssistant.save();
    return res
      .status(200)
      .json({ newAssistant, message: "Assistant created successfully" });
  } catch (error) {
    return res.status(500).json("Error while creating the assistant");
  }
};

const getAssistantById = async (req, res) => {
  try {
    const assistant = await Assistant.findById(req.params.assistant_id);
    if (!assistant) {
      return res.status(404).json("Assistant not found");
    }

    return res
      .status(200)
      .json({ assistant, message: "Assistant found successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAssistant = async (req, res) => {
  try {
    const updatedAssistant = await Assistant.findByIdAndUpdate(
      req.params.assistant_id,
      req.body,
      { new: true }
    );
    if (!updatedAssistant) {
      return res.status(400).json("Error while updating the assistant");
    }

    return res
      .status(200)
      .json({ updatedAssistant, message: "Assistant updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAssistant = async (req, res) => {
  try {
    await Assistant.findByIdAndDelete(req.params.assistant_id);

    return res.status(200).json("Assistant deleted successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { createAssistant, getAssistantById, updateAssistant, deleteAssistant };
