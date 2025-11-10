import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router();

// Get directory name in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Download brochure PDF
 * @route GET /api/brochure
 */
router.get('/', (req, res) => {
  try {
    const brochurePath = path.join(__dirname, '../public/brochures/College_Brochure_2026.pdf');
    
    // Check if file exists
    if (!fs.existsSync(brochurePath)) {
      return res.status(404).json({
        success: false,
        message: 'Brochure not found. Please contact admissions.'
      });
    }

    // Set headers for download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=College_Brochure_2026.pdf');
    
    // Send file
    res.sendFile(brochurePath);
  } catch (error) {
    console.error('❌ Error downloading brochure:', error);
    res.status(500).json({
      success: false,
      message: 'Error downloading brochure'
    });
  }
});

export default router;
