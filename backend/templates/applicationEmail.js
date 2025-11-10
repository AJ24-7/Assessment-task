const generateApplicationEmail = (applicantData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - College of Excellence</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f7fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">
                College of Excellence
              </h1>
              <p style="margin: 10px 0 0; color: #e0e7ff; font-size: 16px;">
                Building Tomorrow's Leaders Today
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 20px; font-weight: 600;">
                Dear ${applicantData.fullName},
              </h2>
              
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Thank you for your interest in <strong>College of Excellence</strong>! We are delighted to confirm that we have received your application for the <strong>${applicantData.courseInterested}</strong> program for intake year <strong>${applicantData.intakeYear}</strong>.
              </p>

              <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%); border-left: 4px solid #667eea; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <h3 style="color: #667eea; font-size: 18px; margin: 0 0 15px; font-weight: 600;">
                  📋 Your Application Details
                </h3>
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 40%;">Name:</td>
                    <td style="color: #1f2937; font-size: 14px;">${applicantData.fullName}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Email:</td>
                    <td style="color: #1f2937; font-size: 14px;">${applicantData.email}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Phone:</td>
                    <td style="color: #1f2937; font-size: 14px;">${applicantData.phone}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; font-weight: 600;">State:</td>
                    <td style="color: #1f2937; font-size: 14px;">${applicantData.state}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Course:</td>
                    <td style="color: #1f2937; font-size: 14px;"><strong>${applicantData.courseInterested}</strong></td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Intake Year:</td>
                    <td style="color: #1f2937; font-size: 14px;"><strong>${applicantData.intakeYear}</strong></td>
                  </tr>
                </table>
              </div>

              <h3 style="color: #1f2937; font-size: 18px; margin: 30px 0 15px; font-weight: 600;">
                🎯 What Happens Next?
              </h3>
              
              <div style="margin: 20px 0;">
                <div style="display: flex; align-items: start; margin-bottom: 15px;">
                  <div style="background-color: #667eea; color: white; border-radius: 50%; width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">1</div>
                  <div>
                    <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.5;">
                      <strong>Application Review:</strong> Our admissions team will carefully review your application within <strong>24-48 hours</strong>.
                    </p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: start; margin-bottom: 15px;">
                  <div style="background-color: #667eea; color: white; border-radius: 50%; width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">2</div>
                  <div>
                    <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.5;">
                      <strong>Personal Contact:</strong> Our admission counselor will reach out to you via phone or email.
                    </p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: start; margin-bottom: 15px;">
                  <div style="background-color: #667eea; color: white; border-radius: 50%; width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">3</div>
                  <div>
                    <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.5;">
                      <strong>Document Submission:</strong> You'll receive detailed instructions on required documents.
                    </p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: start;">
                  <div style="background-color: #667eea; color: white; border-radius: 50%; width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">4</div>
                  <div>
                    <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.5;">
                      <strong>Final Admission:</strong> Complete the enrollment process and secure your seat!
                    </p>
                  </div>
                </div>
              </div>

              <div style="background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 15px; margin: 30px 0;">
                <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5;">
                  <strong>⏰ Important:</strong> Early applicants get priority for scholarships and preferred batch timings. Complete your admission process at the earliest!
                </p>
              </div>

              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                If you have any questions or need assistance, feel free to reach out to us:
              </p>

              <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0 0 10px; color: #1f2937; font-size: 14px;">
                  📞 <strong>Phone:</strong> +91 11 4567 8900
                </p>
                <p style="margin: 0 0 10px; color: #1f2937; font-size: 14px;">
                  📧 <strong>Email:</strong> admissions@collegeofexcellence.edu.in
                </p>
                <p style="margin: 0; color: #1f2937; font-size: 14px;">
                  📍 <strong>Address:</strong> Rajiv Gandhi Education City, Knowledge Park, New Delhi 110001
                </p>
              </div>

              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 30px 0 0;">
                We look forward to welcoming you to our college community!
              </p>

              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 10px 0 0;">
                Warm regards,<br>
                <strong>Admissions Team</strong><br>
                College of Excellence
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px; color: #6b7280; font-size: 14px;">
                Follow us on:
              </p>
              <div style="margin: 15px 0;">
                <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 600;">Facebook</a>
                <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 600;">LinkedIn</a>
                <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 600;">Instagram</a>
                <a href="#" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 600;">Twitter</a>
              </div>
              <p style="margin: 15px 0 0; color: #9ca3af; font-size: 12px;">
                © 2026 College of Excellence. All rights reserved.
              </p>
              <p style="margin: 5px 0 0; color: #9ca3af; font-size: 12px;">
                This is an automated email. Please do not reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export default generateApplicationEmail;
