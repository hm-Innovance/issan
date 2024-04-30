import { Router } from "express";
const router = Router();
import { createChapter } from "../controllers/chapter.controller.js";
router.route("/create").post(createChapter);
export default router;