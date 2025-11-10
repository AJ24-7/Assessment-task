import express from 'express'
import { body } from 'express-validator'
import { submitContactForm, getContactSubmissions } from '../controllers/contactController.js'
import { validateRequest } from '../middleware/validateRequest.js'

const router = express.Router()

// Validation rules for contact form
const contactValidation = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[0-9]{10}$/)
    .withMessage('Please provide a valid 10-digit Indian phone number'),
  body('state')
    .trim()
    .notEmpty()
    .withMessage('State is required'),
  body('courseInterested')
    .trim()
    .notEmpty()
    .withMessage('Course selection is required'),
  body('intakeYear')
    .trim()
    .notEmpty()
    .withMessage('Intake year is required')
    .isIn(['2026', '2027', '2028'])
    .withMessage('Please select a valid intake year'),
  body('consent')
    .exists()
    .withMessage('Consent is required')
    .custom((value) => {
      if (value === true || value === 'true') {
        return true;
      }
      throw new Error('You must provide consent to submit the application');
    })
]

// POST /api/contact - Submit contact form
router.post('/', contactValidation, validateRequest, submitContactForm)

// GET /api/contact - Get all submissions (for admin use)
router.get('/', getContactSubmissions)

export default router
