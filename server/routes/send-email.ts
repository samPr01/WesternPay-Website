import { RequestHandler } from "express";

export interface EmailRequest {
  type: "contact" | "signin" | "signup";
  data: {
    name?: string;
    email: string;
    subject?: string;
    message?: string;
    password?: string;
  };
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const handleSendEmail: RequestHandler = async (req, res) => {
  try {
    const { type, data }: EmailRequest = req.body;

    if (!type || !data || !data.email) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // In a real implementation, you would use a service like SendGrid, Mailgun, or Nodemailer
    // For now, we'll log the email data and return success

    let emailSubject = "";
    let emailBody = "";

    switch (type) {
      case "contact":
        emailSubject = `Contact Form: ${data.subject || "New Inquiry"}`;
        emailBody = `
          New contact form submission from DekainPay website:
          
          Name: ${data.name || "Not provided"}
          Email: ${data.email}
          Subject: ${data.subject || "Not provided"}
          Message: ${data.message || "Not provided"}
          
          Timestamp: ${new Date().toISOString()}
        `;
        break;

      case "signin":
        emailSubject = "DekainPay Sign In Attempt";
        emailBody = `
          Sign in attempt from DekainPay website:
          
          Email: ${data.email}
          Timestamp: ${new Date().toISOString()}
          IP: ${req.ip}
        `;
        break;

      case "signup":
        emailSubject = "New DekainPay Sign Up";
        emailBody = `
          New user registration from DekainPay website:
          
          Name: ${data.name || "Not provided"}
          Email: ${data.email}
          Timestamp: ${new Date().toISOString()}
          IP: ${req.ip}
        `;
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid email type",
        });
    }

    // Log the email data (in production, you would actually send the email)
    console.log("=== EMAIL TO SEND ===");
    console.log("To: info@dekainpay.com");
    console.log("Subject:", emailSubject);
    console.log("Body:", emailBody);
    console.log("====================");

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response: EmailResponse = {
      success: true,
      message: "Email sent successfully",
    };

    res.json(response);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
};
