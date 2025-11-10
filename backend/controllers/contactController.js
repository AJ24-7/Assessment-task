import axios from 'axios'
import { sendApplicationEmail, sendAdminNotification } from '../services/emailService.js'

// In-memory storage for submissions (for demonstration)
// In production, use a proper database
let submissions = []

/**
 * Submit contact form data to Pipedream workflow
 * @route POST /api/contact
 */
export const submitContactForm = async (req, res, next) => {
  try {
    const { fullName, email, phone, state, courseInterested, intakeYear, consent } = req.body

    // Prepare data for Pipedream
    const formData = {
      fullName,
      email,
      phone,
      state,
      courseInterested,
      intakeYear,
      consent,
      submittedAt: new Date().toISOString(),
      source: 'College Website'
    }

    // Store in memory (for demo purposes)
    submissions.push({
      id: submissions.length + 1,
      ...formData
    })

    // Send to Pipedream webhook
    if (process.env.PIPEDREAM_WEBHOOK_URL) {
      try {
        await axios.post(process.env.PIPEDREAM_WEBHOOK_URL, formData, {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 10000 // 10 second timeout
        })
        console.log('✅ Data sent to Pipedream successfully')
      } catch (pipedreamError) {
        console.error('⚠️ Pipedream webhook error:', pipedreamError.message)
        // Don't fail the request if Pipedream fails, just log it
      }
    } else {
      console.warn('⚠️ PIPEDREAM_WEBHOOK_URL not configured')
    }

    // Send email to applicant
    const emailResult = await sendApplicationEmail(formData)
    if (emailResult.success) {
      console.log('✅ Application confirmation email sent to:', email)
    } else {
      console.warn('⚠️ Failed to send email to applicant:', emailResult.error)
    }

    // Send notification to admin
    const adminEmailResult = await sendAdminNotification(formData)
    if (adminEmailResult.success) {
      console.log('✅ Admin notification email sent')
    } else {
      console.warn('⚠️ Failed to send admin notification:', adminEmailResult.error)
    }

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Your application has been submitted successfully!',
      data: {
        id: submissions.length,
        fullName: formData.fullName,
        email: formData.email,
        courseInterested: formData.courseInterested,
        intakeYear: formData.intakeYear,
        submittedAt: formData.submittedAt
      }
    })

  } catch (error) {
    console.error('❌ Contact form submission error:', error)
    next(error)
  }
}

/**
 * Get all contact form submissions
 * @route GET /api/contact
 */
export const getContactSubmissions = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    })
  } catch (error) {
    console.error('❌ Error fetching submissions:', error)
    next(error)
  }
}
