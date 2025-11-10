# College Website - Quick Setup Guide

## 🚀 Quick Setup (Windows PowerShell)

Follow these steps to get the application running:

### Step 1: Install Backend Dependencies

```powershell
cd backend
npm install
```

### Step 2: Install Frontend Dependencies

```powershell
cd ..\frontend
npm install
```

### Step 3: Configure Pipedream (Optional but Recommended)

1. Visit https://pipedream.com/ and sign up/login
2. Create a new workflow
3. Add an HTTP trigger (HTTP Requests with a Body)
4. Copy the webhook URL
5. Open `backend\.env` in a text editor
6. Paste your webhook URL:
   ```
   PIPEDREAM_WEBHOOK_URL=https://your-url.m.pipedream.net
   ```

### Step 4: Start the Backend Server

```powershell
cd ..\backend
npm run dev
```

Keep this terminal window open. The backend will run on http://localhost:5000

### Step 5: Start the Frontend (New Terminal)

Open a NEW PowerShell terminal and run:

```powershell
cd frontend
npm run dev
```

The frontend will open at http://localhost:3000

## ✅ Verification

1. Backend should show: ✅ Server is running on port 5000
2. Frontend should open in your browser automatically
3. Navigate to http://localhost:3000 to see the website

## 🎯 Testing the Application

1. **Home Page**: Check the animated landing page
2. **Gallery**: Click on Gallery in the navigation
3. **Contact Form**: 
   - Fill out the application form
   - Submit and verify success message
   - If Pipedream is configured, check your workflow for the data

## 🔧 Troubleshooting

### Port Already in Use

If port 5000 or 3000 is already in use:

**Backend**: Edit `backend\.env` and change PORT to another number (e.g., 5001)
**Frontend**: Edit `frontend\vite.config.js` and change the port

### Dependencies Installation Failed

Try clearing npm cache:
```powershell
npm cache clean --force
npm install
```

### Frontend Can't Connect to Backend

1. Make sure backend is running (check terminal)
2. Verify backend is on port 5000
3. Check `frontend\vite.config.js` proxy settings

## 📱 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🎨 Next Steps

1. **Customize Colors**: Edit `frontend\tailwind.config.js`
2. **Add Real Images**: Replace emoji placeholders in Gallery
3. **Update Content**: Modify text in Home, Gallery, and Contact pages
4. **Configure Pipedream**: Set up email notifications, CRM integration, etc.
5. **Add Database**: Replace in-memory storage with MongoDB or PostgreSQL

## 📚 Documentation

- Main README: `README.md`
- Frontend README: `frontend\README.md`
- Backend README: `backend\README.md`

---

**Happy Coding! 🎓**
