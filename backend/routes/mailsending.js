import express from "express";
import sendingMail from "../controllers/mailsending.controller.js";

const router = express.Router();

router.post("/api/affiliate", mailsending)

export default router