# College Website Frontend

A modern, responsive React-based college website featuring a professional landing page, animated gallery, and integrated lead form with Pipedream API workflow.

## 🚀 Features

- **Professional Landing Page**: Eye-catching hero section with animations, statistics, features showcase, and call-to-action sections
- **Animated Gallery**: Filterable image gallery with smooth animations and lightbox view
- **Lead Form**: Contact/Application form with validation and Pipedream webhook integration
- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion for smooth animations
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router v6** - Client-side routing
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Landing page
│   │   ├── Gallery.jsx  # Gallery page
│   │   └── Contact.jsx  # Contact/Application form
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔌 API Integration

The frontend connects to the backend API running on `http://localhost:5000`. The proxy is configured in `vite.config.js`:

```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
  }
}
```

## 🎯 Features Breakdown

### Landing Page (Home)
- Animated hero section with gradient backgrounds
- Statistics showcase
- Feature cards with icons
- Program highlights
- Call-to-action sections

### Gallery
- Filterable image gallery (All, Campus, Events, Facilities, Students)
- Smooth animations on filter change
- Lightbox view for enlarged images
- Responsive grid layout

### Contact Form
- Form validation
- Real-time submission status
- Integration with backend API
- Sends data to Pipedream webhook
- Professional layout with additional information

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Animations
Customize animations in `tailwind.config.js` or use Framer Motion components directly.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

### Deploy to Netlify/Vercel

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set environment variables if needed

## 📝 Environment Variables

Create a `.env` file for environment-specific configurations (optional):

```env
VITE_API_URL=http://localhost:5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using React and modern web technologies
