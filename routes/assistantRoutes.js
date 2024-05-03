import { Router } from "express";
import { createAssistant } from "../controllers/assistantController";

const router  = Router()

router.route("/",createAssistant)

export default router