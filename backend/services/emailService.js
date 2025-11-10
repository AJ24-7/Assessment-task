import pkg from 'nodemailer';
const { createTransport } = pkg;
import generateApplicationEmail from '../templates/applicationEmail.js';

// Create reusable transporter
const getTransporter = () => {
  // For development, you can use Gmail or a test service like Ethereal
  // For production, use services like SendGrid, AWS SES, or Mailgun
  
  return createTransport({
    // Gmail configuration (for testing)
    // For production, use environment variables
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASSWORD // Your app-specific password
    }
  });

  // Alternative: Ethereal Email (for testing without real email)
  // Uncomment below and comment above for testing
  /*
  return createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.ETHEREAL_USER,
      pass: process.env.ETHEREAL_PASS
    }
  });
  */
};

export const sendApplicationEmail = async (applicantData) => {
  try {
    const transporter = getTransporter();

    // Generate HTML email content
    const htmlContent = generateApplicationEmail(applicantData);

    // Email options
    const mailOptions = {
      from: {
        name: 'College of Excellence - Admissions',
        address: process.env.EMAIL_FROM || 'admissions@collegeofexcellence.edu.in'
      },
      to: applicantData.email,
      subject: `Application Received - ${applicantData.courseInterested} | College of Excellence`,
      html: htmlContent,
      // Optional: Add plain text fallback
      text: `Dear ${applicantData.fullName},\n\nThank you for your application to ${applicantData.courseInterested} for intake year ${applicantData.intakeYear}. We will review your application and contact you within 24-48 hours.\n\nBest regards,\nAdmissions Team\nCollege of Excellence`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Application email sent:', info.messageId);
    return {
      success: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Don't throw error - we don't want email failures to break the application flow
    return {
      success: false,
      error: error.message
    };
  }
};

// Send notification to admin
export const sendAdminNotification = async (applicantData) => {
  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@collegeofexcellence.edu.in',
      to: process.env.ADMIN_EMAIL || 'admissions@collegeofexcellence.edu.in',
      subject: `New Application: ${applicantData.fullName} - ${applicantData.courseInterested}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #667eea;">New Application Received</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">Name:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${applicantData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">Email:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${applicantData.email}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${applicantData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">State:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${applicantData.state}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">Course:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>${applicantData.courseInterested}</strong></td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">Intake Year:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>${applicantData.intakeYear}</strong></td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 12px; font-weight: bold; border: 1px solid #e5e7eb;">Consent:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${applicantData.consent ? '✅ Yes' : '❌ No'}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending admin notification:', error);
    return { success: false, error: error.message };
  }
};

export default {
  sendApplicationEmail,
  sendAdminNotification
};
