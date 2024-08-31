// mailer.js
import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service provider here
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or application-specific password
  },
});

// Function to send email
export const sendEmail = async (to, fileLink) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to, // List of recipients
      subject: "Here is your file link", // Subject line
      text: `You can download your file from the following link: ${fileLink}`, // Plain text body
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          background-color: #1e1e2f;
          color: #ffffff;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          line-height: 1.6;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #2b2b3a;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
        }
        .header h1 {
          margin: 0;
          color: #ffcc00;
        }
        .content {
          text-align: center;
        }
        .content p {
          font-size: 18px;
          margin-bottom: 30px;
          color: #ffffff; /* Ensure the text is white */
        }
        .content a {
          display: inline-block;
          background-color: #ffcc00;
          color: #1e1e2f;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #bbbbbb;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Your File is Ready!</h1>
        </div>
        <div class="content">
          <p>You can download your file by clicking the button below:</p>
          <a href="${fileLink}">Download File</a>
        </div>
        <div class="footer">
          <p>If you did not request this file, please ignore this email.</p>
        </div>
      </div>
    </body>
    </html>
  `, // HTML body
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
