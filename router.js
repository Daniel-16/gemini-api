import express from "express";
const router = express.Router();
import { generate } from "./generateText.js";

router.get("/", generate);

export default router;
