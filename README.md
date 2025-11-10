# College Website - Full Stack Application

A modern, professional college website built with React frontend and Node.js backend, featuring animated components, a beautiful gallery, and integrated lead form with Pipedream API workflow.

## 🎯 Project Overview

This is a complete full-stack web application for a college website with:
- **Frontend**: React with Vite, Tailwind CSS, and Framer Motion
- **Backend**: Node.js with Express.js REST API
- **Integration**: Pipedream webhook for form submissions

## ✨ Key Features

### Frontend Features
- 🎨 **Professional Landing Page** with animated hero section
- 📊 **Statistics Dashboard** showcasing college achievements
- 🎓 **Programs Showcase** with interactive cards
- 🖼️ **Animated Gallery** with filtering and lightbox view
- 📝 **Application Form** with real-time validation
- 📱 **Responsive Design** for all devices
- ⚡ **Smooth Animations** using Framer Motion
- 🎯 **Modern UI** with Tailwind CSS

### Backend Features
- 🔒 **Secure API** with Helmet.js and CORS
- ✅ **Form Validation** using express-validator
- 🔗 **Pipedream Integration** for lead management
- 🚦 **Rate Limiting** to prevent abuse
- 📝 **Request Logging** with Morgan
- ⚠️ **Error Handling** with custom middleware
- 🌐 **RESTful Architecture**

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router v6
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- Axios
- express-validator
- Helmet.js
- CORS
- Morgan
- dotenv
- express-rate-limit

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Pipedream account (for webhook integration)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "Assessment task"
```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your Pipedream webhook URL
# PIPEDREAM_WEBHOOK_URL=https://your-webhook-url.m.pipedream.net

# Start backend server
npm run dev
```

The backend will start on `http://localhost:5000`

### 3. Setup Frontend

```bash
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:3000`

### 4. Access the Application

Open your browser and visit: `http://localhost:3000`

## 📁 Project Structure

```
Assessment task/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── backend/                  # Node.js backend API
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validateRequest.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md                 # This file
```

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "program": "Computer Science & IT",
  "message": "I'm interested in your programs"
}
```

### Get All Submissions
```
GET /api/contact
```

## 🌐 Pipedream Integration Setup

### Step 1: Create Pipedream Workflow

1. Visit [Pipedream.com](https://pipedream.com/)
2. Sign up or log in
3. Click "New Workflow"
4. Add an **HTTP / Webhook** trigger
5. Select **HTTP Requests with a Body**
6. Copy the webhook URL

### Step 2: Configure Backend

1. Open `backend/.env`
2. Add your webhook URL:
   ```env
   PIPEDREAM_WEBHOOK_URL=https://your-unique-url.m.pipedream.net
   ```

### Step 3: Add Pipedream Actions

You can add various actions to your Pipedream workflow:

- **Email Notifications**: Send email via Gmail, SendGrid, etc.
- **Database Storage**: Save to Airtable, MongoDB, PostgreSQL
- **CRM Integration**: Send to Salesforce, HubSpot
- **Notifications**: Slack, Discord, SMS
- **Spreadsheets**: Google Sheets, Excel Online
- **Custom Code**: Run Node.js code for custom logic

### Example Pipedream Workflow Steps

1. **HTTP Trigger** - Receives form data
2. **Email** - Send notification to admissions team
3. **Airtable** - Store lead in database
4. **Slack** - Notify team channel
5. **Google Sheets** - Log submission

## 🎨 Customization Guide

### Update Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Update College Information

1. **Logo & Name**: Edit `frontend/src/components/Navbar.jsx` and `Footer.jsx`
2. **Contact Info**: Edit `frontend/src/components/Footer.jsx` and `frontend/src/pages/Contact.jsx`
3. **Programs**: Edit `frontend/src/pages/Home.jsx` and `frontend/src/pages/Contact.jsx`

### Add Real Images to Gallery

Replace the emoji placeholders in `frontend/src/pages/Gallery.jsx` with actual images:

```javascript
const galleryImages = [
  {
    id: 1,
    category: 'campus',
    title: 'Main Campus Building',
    description: 'Our state-of-the-art main building',
    image: '/images/campus-1.jpg' // Add your image path
  },
  // ... more images
]
```

## 🔐 Environment Variables

### Backend (.env)

```env
PORT=5000
NODE_ENV=development
PIPEDREAM_WEBHOOK_URL=your_pipedream_webhook_url
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env - optional)

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Production Deployment

### Frontend Deployment (Netlify/Vercel)

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `dist/` folder to:
   - **Netlify**: Drag and drop or connect Git
   - **Vercel**: Connect repository and deploy

3. Update backend CORS settings with your production URL

### Backend Deployment (Heroku/Railway/Render)

1. Push your code to Git
2. Connect to deployment platform
3. Set environment variables
4. Deploy

Example for Heroku:
```bash
heroku create your-app-name
heroku config:set PIPEDREAM_WEBHOOK_URL=your_url
heroku config:set FRONTEND_URL=your_frontend_url
git push heroku main
```

## 📊 Features Showcase

### Landing Page
- Hero section with gradient animations
- Statistics counter (10,000+ Students, 95% Placement Rate)
- Feature cards (Expert Faculty, Global Community, etc.)
- Program highlights
- Call-to-action sections

### Gallery Page
- Filter by category (All, Campus, Events, Facilities, Students)
- Smooth animations on filter change
- Click to enlarge images
- Responsive grid layout

### Contact Page
- Form validation
- Real-time error messages
- Success/error notifications
- Automatic submission to Pipedream
- Contact information cards
- Office hours and quick links

## 🧪 Testing

### Test Backend API

```bash
# Health check
curl http://localhost:5000/api/health

# Submit form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "program": "Computer Science",
    "message": "Test"
  }'
```

### Test Frontend

1. Visit `http://localhost:3000`
2. Navigate through all pages
3. Test the contact form submission
4. Check gallery filters and lightbox

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Troubleshooting

### Frontend Not Loading
- Check if backend is running on port 5000
- Clear browser cache
- Check console for errors

### Form Submission Failing
- Verify backend is running
- Check Pipedream webhook URL in `.env`
- Check browser console and network tab

### Port Already in Use
- Change port in `backend/.env` and `frontend/vite.config.js`
- Kill process using the port

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For issues, questions, or contributions:
- Open an issue in the repository
- Contact the development team
- Check individual README files in frontend and backend folders

## 🎓 Credits

Built with modern web technologies:
- React Team for React
- Vercel for Vite
- Tailwind Labs for Tailwind CSS
- Framer for Framer Motion
- Pipedream for webhook integration

---

**Made with ❤️ for educational excellence**
