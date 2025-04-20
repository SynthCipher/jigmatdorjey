import transporter from "../config/nodemailer.js";

/**
 * Handles contact form submissions from the portfolio
 * Endpoint: POST /api/sites/send
 */
const sendContactEmail = async (req, res) => {
  try {
    const { email, name, subject, message } = req.body;

    if (!email || !name || !subject || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide all required fields: name, email, subject, and message",
      });
    }

    // Format current date for the owner notification
    const currentDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // 1. Send thank you email to the person who submitted the form
    const thankYouMailOptions = {
      from: `"Jigmat Portfolio" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting me",
      html: CONTACT_THANK_YOU_TEMPLATE.replace("{{name}}", name),
    };

    // 2. Send notification email with form details to you
    const ownerNotificationOptions = {
      from: `"Portfolio Contact Form" <${process.env.SENDER_EMAIL}>`,
      to: "jigmatdorjey255@gmail.com",
      replyTo: email, // Allow direct reply to the sender
      subject: `New Portfolio Contact: ${subject}`,
      html: CONTACT_OWNER_NOTIFICATION_TEMPLATE.replace(/{{name}}/g, name)
        .replace(/{{email}}/g, email)
        .replace(/{{subject}}/g, subject)
        .replace(/{{message}}/g, message)
        .replace(/{{date}}/g, currentDate),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(thankYouMailOptions),
      transporter.sendMail(ownerNotificationOptions),
    ]);

    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending contact emails:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send your message. Please try again later.",
    });
  }
};

// Email templates
const CONTACT_THANK_YOU_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #333; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 0.8em; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Me</h1>
    </div>
    <div class="content">
      <p>Hello {{name}},</p>
      <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to check out my projects and blog posts on my portfolio site.</p>
      <p>Best regards,<br>Jigmat</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

const CONTACT_OWNER_NOTIFICATION_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #333; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .message-box { background-color: #f9f9f9; border-left: 4px solid #333; padding: 15px; margin: 15px 0; }
    .details { margin-top: 20px; }
    .detail-row { display: flex; margin-bottom: 10px; }
    .detail-label { font-weight: bold; width: 100px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p>You have received a new contact form submission from your portfolio website.</p>
      
      <div class="details">
        <div class="detail-row">
          <span class="detail-label">Name:</span>
          <span>{{name}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span>{{email}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Subject:</span>
          <span>{{subject}}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date:</span>
          <span>{{date}}</span>
        </div>
      </div>
      
      <h3>Message:</h3>
      <div class="message-box">
        {{message}}
      </div>
      
      <p>You can reply directly to this email to respond to {{name}}.</p>
    </div>
  </div>
</body>
</html>
`;

export { sendContactEmail };
