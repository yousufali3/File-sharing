// server.js or routes file
import express from "express";
import { sendEmail } from "../utils/mailer.js";

const router = express.Router();
router.post("", async (req, res) => {
  console.log(req.body);

  const { email, fileId } = req.body;

  // Basic input validation
  if (!email || !fileId) {
    return res.status(400).json({ message: "Email and fileId are required" });
  }

  // Construct the file link
  const fileLink = `http://localhost:3000/api/file/${fileId}`; // Adjust this URL as needed

  try {
    // Send the email
    await sendEmail(email, fileLink);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message); // Log detailed error for debugging
    return res
      .status(500)
      .json({ message: "Failed to send email. Please try again later." });
  }
});

export default router;
