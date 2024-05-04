import { Router } from "express";
import {
  deleteAssistant,
  createAssistant,
  getAssistantById,
  updateAssistant,
} from "../controllers/assistantController.js";

const router = Router();

router.route("/").post(createAssistant);
router
  .route("/:assistant_id")
  .get(getAssistantById)
  .delete(deleteAssistant)
  .put(updateAssistant);

export default router;
