import express from "express";
import { uploadImage, downloadImage } from "../controller/image-controller.js";
import sendEmails from "../routes/emailRoute.js";
import upload from "../utils/upload.js";
const router = express.Router();
import emailRoutes from "../routes/emailRoute.js";
router.post("/upload", upload.single("file"), uploadImage);
router.get(`/file/:fileId`, downloadImage);
router.use("/send-email", emailRoutes);

export default router;
