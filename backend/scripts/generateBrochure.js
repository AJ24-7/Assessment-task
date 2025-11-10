import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create public/brochures directory if it doesn't exist
const brochureDir = path.join(__dirname, '../public/brochures');
if (!fs.existsSync(brochureDir)) {
  fs.mkdirSync(brochureDir, { recursive: true });
}

const generateBrochure = () => {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 50, bottom: 50, left: 50, right: 50 }
  });

  const outputPath = path.join(brochureDir, 'College_Brochure_2026.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Colors
  const primaryColor = '#667eea';
  const secondaryColor = '#764ba2';
  const darkGray = '#1f2937';
  const lightGray = '#6b7280';

  // Page 1: Cover Page
  // Background gradient
  doc.save();
  const gradient = doc.linearGradient(0, 0, 0, 792);
  gradient.stop(0, primaryColor);
  gradient.stop(1, secondaryColor);
  doc.rect(0, 0, 612, 792).fill(gradient);
  doc.restore();

  doc
    .fontSize(48)
    .fillColor('#ffffff')
    .font('Helvetica-Bold')
    .text('College of Excellence', 50, 250, { align: 'center', width: 512 });

  doc
    .fontSize(24)
    .fillColor('#e0e7ff')
    .font('Helvetica')
    .text('Building Tomorrow\'s Leaders Today', 50, 320, { align: 'center', width: 512 });

  doc
    .fontSize(16)
    .fillColor('#ffffff')
    .text('Academic Year 2026-27', 50, 400, { align: 'center', width: 512 });

  doc
    .fontSize(12)
    .fillColor('#e0e7ff')
    .text('Rajiv Gandhi Education City, Knowledge Park', 50, 650, { align: 'center', width: 512 })
    .text('New Delhi 110001', 50, 670, { align: 'center', width: 512 })
    .text('www.collegeofexcellence.edu.in', 50, 690, { align: 'center', width: 512 });

  // Page 2: About Us
  doc.addPage();
  
  doc
    .fontSize(28)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('About Us', 50, 50);

  doc
    .fontSize(12)
    .fillColor(darkGray)
    .font('Helvetica')
    .text(
      'Welcome to College of Excellence, where academic excellence meets innovation. ' +
      'Established with a vision to nurture future leaders, our institution stands as a ' +
      'beacon of quality education in India.',
      50, 100, { width: 512, align: 'justify', lineGap: 5 }
    );

  doc
    .fontSize(16)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('Why Choose Us?', 50, 200);

  const features = [
    'AICTE & UGC approved programs',
    'Industry-aligned curriculum with latest technologies',
    'State-of-the-art infrastructure and labs',
    'Expert faculty from IITs, NITs, and industry',
    '95% placement record with top companies',
    'International collaborations and exchange programs',
    'Comprehensive scholarship opportunities',
    'Vibrant campus life with 50+ clubs and activities'
  ];

  let y = 240;
  features.forEach((feature, index) => {
    doc
      .fontSize(11)
      .fillColor(darkGray)
      .font('Helvetica')
      .circle(60, y + 5, 3)
      .fill(primaryColor)
      .fillColor(darkGray)
      .text(feature, 75, y, { width: 487 });
    y += 25;
  });

  doc
    .fontSize(16)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('Our Mission', 50, y + 30);

  doc
    .fontSize(11)
    .fillColor(darkGray)
    .font('Helvetica')
    .text(
      'To provide world-class education that empowers students with knowledge, skills, ' +
      'and values to excel in their chosen fields and contribute meaningfully to society.',
      50, y + 65, { width: 512, align: 'justify', lineGap: 5 }
    );

  // Page 3: Programs Offered
  doc.addPage();

  doc
    .fontSize(28)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('Programs Offered', 50, 50);

  const programs = [
    {
      name: 'B.Tech Computer Science & Engineering',
      duration: '4 Years',
      fees: '₹2,50,000/year',
      seats: '120',
      highlights: ['AI & ML specialization', 'Industry internships', 'Latest tech stack']
    },
    {
      name: 'MBA (Master of Business Administration)',
      duration: '2 Years',
      fees: '₹3,50,000/year',
      seats: '100',
      highlights: ['AICTE approved', 'Industry projects', '95% placement']
    },
    {
      name: 'B.Sc (Hons) Data Science',
      duration: '3 Years',
      fees: '₹1,80,000/year',
      seats: '80',
      highlights: ['IBM certification', 'Hands-on training', 'Big Data focus']
    },
    {
      name: 'B.Des (Bachelor of Design)',
      duration: '4 Years',
      fees: '₹2,20,000/year',
      seats: '60',
      highlights: ['UI/UX specialization', 'Industry labs', 'Portfolio development']
    },
    {
      name: 'B.Com (Hons) with CA',
      duration: '3 Years',
      fees: '₹1,20,000/year',
      seats: '150',
      highlights: ['CA Foundation included', 'Tally & SAP training', 'Big 4 internships']
    },
    {
      name: 'BA (Hons) Psychology',
      duration: '3 Years',
      fees: '₹1,50,000/year',
      seats: '100',
      highlights: ['Clinical psych lab', 'Research focus', 'NET/SET coaching']
    }
  ];

  let programY = 100;
  programs.forEach((program, index) => {
    if (programY > 650) {
      doc.addPage();
      programY = 50;
    }

    // Program box
    doc
      .rect(50, programY - 10, 512, 100)
      .fillAndStroke('#f0f9ff', primaryColor);

    doc
      .fontSize(14)
      .fillColor(primaryColor)
      .font('Helvetica-Bold')
      .text(program.name, 60, programY, { width: 400 });

    doc
      .fontSize(10)
      .fillColor(darkGray)
      .font('Helvetica')
      .text(`Duration: ${program.duration}  |  Fees: ${program.fees}  |  Seats: ${program.seats}`, 60, programY + 20);

    doc
      .fontSize(9)
      .fillColor(lightGray)
      .text(`✓ ${program.highlights.join('  ✓ ')}`, 60, programY + 40, { width: 492 });

    programY += 120;
  });

  // Page: Admission Process
  doc.addPage();

  doc
    .fontSize(28)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('Admission Process', 50, 50);

  const steps = [
    {
      step: '1',
      title: 'Apply Online',
      desc: 'Fill the online application form with your details and program preference.'
    },
    {
      step: '2',
      title: 'Document Submission',
      desc: 'Submit required documents: 10th/12th marksheets, ID proof, photographs.'
    },
    {
      step: '3',
      title: 'Entrance Test (if applicable)',
      desc: 'Appear for entrance exam/interview for selected programs.'
    },
    {
      step: '4',
      title: 'Offer Letter',
      desc: 'Receive offer letter and admission confirmation via email.'
    },
    {
      step: '5',
      title: 'Fee Payment',
      desc: 'Pay admission and tuition fees through online/offline mode.'
    },
    {
      step: '6',
      title: 'Enrollment Complete',
      desc: 'Receive student ID, access to portal, and join orientation program.'
    }
  ];

  let stepY = 120;
  steps.forEach((item) => {
    doc
      .circle(65, stepY + 10, 15)
      .fill(primaryColor);

    doc
      .fontSize(14)
      .fillColor('#ffffff')
      .font('Helvetica-Bold')
      .text(item.step, 59, stepY + 5);

    doc
      .fontSize(13)
      .fillColor(darkGray)
      .font('Helvetica-Bold')
      .text(item.title, 95, stepY);

    doc
      .fontSize(10)
      .fillColor(lightGray)
      .font('Helvetica')
      .text(item.desc, 95, stepY + 18, { width: 450 });

    stepY += 60;
  });

  // Eligibility & Documents
  doc
    .fontSize(16)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('Eligibility Criteria', 50, stepY + 30);

  doc
    .fontSize(10)
    .fillColor(darkGray)
    .font('Helvetica')
    .text('• 10+2 or equivalent with minimum 50% marks', 50, stepY + 60)
    .text('• Valid entrance exam score (JEE/CAT/CUET) for respective programs', 50, stepY + 80)
    .text('• Age limit: 17-25 years as on admission date', 50, stepY + 100);

  // Page: Facilities & Contact
  doc.addPage();

  doc
    .fontSize(28)
    .fillColor(primaryColor)
    .font('Helvetica-Bold')
    .text('World-Class Facilities', 50, 50);

  const facilities = [
    'Modern Smart Classrooms with Audio-Visual aids',
    'Advanced Computer Labs with latest software',
    'Comprehensive Library with 50,000+ books',
    'Sports Complex with indoor & outdoor facilities',
    'Hostel accommodation with all amenities',
    'Healthcare center with 24/7 medical support',
    'Cafeteria serving nutritious meals',
    'Wi-Fi enabled campus',
    'Auditorium with 500+ seating capacity',
    'Research & Development centers'
  ];

  let facilityY = 110;
  facilities.forEach((facility) => {
    doc
      .fontSize(11)
      .fillColor(darkGray)
      .font('Helvetica')
      .circle(60, facilityY + 5, 3)
      .fill(primaryColor)
      .fillColor(darkGray)
      .text(facility, 75, facilityY, { width: 487 });
    facilityY += 23;
  });

  // Contact Information Box
  doc.save();
  const contactGradient = doc.linearGradient(50, facilityY + 40, 562, facilityY + 240);
  contactGradient.stop(0, primaryColor);
  contactGradient.stop(1, secondaryColor);
  doc.rect(50, facilityY + 40, 512, 200).fill(contactGradient);
  doc.restore();

  doc
    .fontSize(22)
    .fillColor('#ffffff')
    .font('Helvetica-Bold')
    .text('Contact Us', 60, facilityY + 60, { width: 492 });

  doc
    .fontSize(12)
    .fillColor('#e0e7ff')
    .font('Helvetica')
    .text('📍 Address:', 60, facilityY + 100)
    .fillColor('#ffffff')
    .text('Rajiv Gandhi Education City, Knowledge Park, New Delhi 110001', 60, facilityY + 120, { width: 492 });

  doc
    .fillColor('#e0e7ff')
    .text('📞 Phone:', 60, facilityY + 150)
    .fillColor('#ffffff')
    .text('+91 11 4567 8900', 60, facilityY + 170);

  doc
    .fillColor('#e0e7ff')
    .text('📧 Email:', 280, facilityY + 150)
    .fillColor('#ffffff')
    .text('admissions@collegeofexcellence.edu.in', 280, facilityY + 170);

  doc
    .fillColor('#e0e7ff')
    .text('🌐 Website:', 60, facilityY + 200)
    .fillColor('#ffffff')
    .text('www.collegeofexcellence.edu.in', 60, facilityY + 220);

  // Finalize PDF
  doc.end();

  stream.on('finish', () => {
    console.log('✅ Brochure PDF generated successfully at:', outputPath);
  });

  stream.on('error', (err) => {
    console.error('❌ Error generating PDF:', err);
  });
};

// Generate the brochure
generateBrochure();

export default generateBrochure;
