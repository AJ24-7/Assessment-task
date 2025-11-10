# 🎓 College Website - Complete Installation & Startup Guide

## 📋 Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- ✅ npm (comes with Node.js)
- ✅ A code editor (VS Code recommended)
- ✅ PowerShell or Command Prompt (Windows)

### Check Your Installation

Open PowerShell and run:
```powershell
node --version
npm --version
```

You should see version numbers (e.g., v18.x.x and 9.x.x).

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

```powershell
cd "c:\Users\Aayus\Assessment task"
```

### Step 2: Install Frontend Dependencies

```powershell
cd frontend
npm install
```

**Wait for installation to complete** (this may take 2-3 minutes)

Expected output:
```
added XXX packages in XXs
```

### Step 3: Install Backend Dependencies (If Needed)

The backend already has dependencies installed, but if you need to reinstall:

```powershell
cd ..\backend
npm install
```

---

## 🔧 Configuration

### Configure Pipedream Webhook (Optional)

If you want form submissions to work with Pipedream:

1. **Create Pipedream Account**
   - Go to https://pipedream.com/
   - Sign up for free account

2. **Create New Workflow**
   - Click "+ New Workflow"
   - Choose "HTTP / Webhook" trigger
   - Select "HTTP Requests with a Body"
   - Copy the webhook URL (looks like: `https://xxxxx.m.pipedream.net`)

3. **Configure Backend**
   - Open `backend\.env` file in a text editor
   - Find the line: `PIPEDREAM_WEBHOOK_URL=`
   - Paste your webhook URL after the `=`
   - Save the file

Example:
```env
PIPEDREAM_WEBHOOK_URL=https://eo123abc456.m.pipedream.net
```

**Note**: The application will work without Pipedream, but form data won't be sent to external services.

---

## ▶️ Starting the Application

You need to run TWO separate processes (frontend and backend).

### Option 1: Using Two PowerShell Windows (Recommended)

#### Terminal 1 - Backend Server

```powershell
cd "c:\Users\Aayus\Assessment task\backend"
npm run dev
```

You should see:
```
✅ Server is running on port 5000
📍 Environment: development
🌐 Frontend URL: http://localhost:3000
```

**Keep this window open!**

#### Terminal 2 - Frontend Server

Open a NEW PowerShell window:

```powershell
cd "c:\Users\Aayus\Assessment task\frontend"
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Your browser should automatically open to `http://localhost:3000`

**Keep this window open too!**

---

### Option 2: Using VS Code Integrated Terminal

1. Open VS Code in the project folder
2. Open Terminal (Ctrl + `)
3. Click the "+" button to create split terminals
4. In left terminal: run backend
5. In right terminal: run frontend

---

## ✅ Verification Checklist

After starting both servers, verify:

- [ ] Backend terminal shows "Server is running on port 5000"
- [ ] Frontend terminal shows "Local: http://localhost:3000/"
- [ ] Browser opens automatically to the website
- [ ] You see the "College of Excellence" landing page
- [ ] Navigation menu works (Home, Gallery, Contact)
- [ ] No red errors in browser console (Press F12 to check)

---

## 🧪 Testing the Application

### Test 1: Navigation
1. Click on "Gallery" in the navigation
2. Click on "Contact" in the navigation
3. Click the logo to return to Home

### Test 2: Gallery Features
1. Go to Gallery page
2. Click different filter buttons (Campus, Events, Facilities, Students)
3. Click on an image to see the lightbox
4. Click the X or backdrop to close

### Test 3: Contact Form
1. Go to Contact page
2. Fill out the form:
   - Name: Your Name
   - Email: your@email.com
   - Phone: 1234567890
   - Program: Select any program
   - Message: Optional test message
3. Click "Submit Application"
4. You should see a green success message

### Test 4: Backend API
Open a new browser tab and visit:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-xx-xxTxx:xx:xx.xxxZ"
}
```

---

## 🐛 Troubleshooting

### Issue: "Port 5000 is already in use"

**Solution 1**: Kill the process using port 5000
```powershell
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Solution 2**: Change the port
1. Edit `backend\.env`
2. Change `PORT=5000` to `PORT=5001`
3. Edit `frontend\vite.config.js`
4. Change `target: 'http://localhost:5000'` to `target: 'http://localhost:5001'`

### Issue: "Port 3000 is already in use"

**Solution**: Change frontend port
1. Edit `frontend\vite.config.js`
2. Change `port: 3000` to `port: 3001`
3. Restart frontend

### Issue: Frontend shows "Failed to fetch"

**Possible causes**:
- Backend is not running
- Wrong port configuration
- CORS issue

**Solutions**:
1. Make sure backend terminal shows server is running
2. Check backend .env file has correct settings
3. Restart both frontend and backend

### Issue: "npm install" fails

**Solution 1**: Clear npm cache
```powershell
npm cache clean --force
npm install
```

**Solution 2**: Delete node_modules and reinstall
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Issue: Form submission doesn't work

**Check**:
1. Backend is running
2. Browser console for errors (F12)
3. Network tab shows request to `/api/contact`
4. Pipedream URL is correct (or can be empty for testing)

---

## 🛑 Stopping the Application

To stop the servers:

1. Go to each PowerShell window
2. Press `Ctrl + C`
3. Confirm by pressing `Y` if prompted

---

## 📱 Accessing the Application

After successful startup:

- **Website (Frontend)**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health
- **View Submissions**: http://localhost:5000/api/contact

---

## 🎨 Next Steps

1. **Customize Content**
   - Edit `frontend\src\pages\Home.jsx` for landing page content
   - Edit `frontend\src\pages\Contact.jsx` for contact information
   - Edit `frontend\src\components\Footer.jsx` for footer content

2. **Change Colors**
   - Edit `frontend\tailwind.config.js`
   - Modify the `primary` and `secondary` color palettes

3. **Add Real Images**
   - Replace emoji placeholders in `frontend\src\pages\Gallery.jsx`
   - Add images to `frontend\public` folder

4. **Setup Pipedream Workflow**
   - Configure email notifications
   - Add database storage
   - Set up CRM integration
   - Add Slack notifications

5. **Add Database**
   - Install MongoDB or PostgreSQL
   - Update `backend\controllers\contactController.js`
   - Replace in-memory storage with database queries

---

## 📚 Additional Resources

- **Main Documentation**: `README.md`
- **Frontend Guide**: `frontend\README.md`
- **Backend Guide**: `backend\README.md`
- **Features List**: `FEATURES.md`
- **Quick Setup**: `SETUP.md`

---

## 🎯 Quick Command Reference

### Start Everything
```powershell
# Terminal 1 (Backend)
cd backend
npm run dev

# Terminal 2 (Frontend)
cd frontend  
npm run dev
```

### Build for Production
```powershell
# Frontend
cd frontend
npm run build

# Backend (no build needed)
cd backend
npm start
```

### Install Dependencies
```powershell
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

---

## ✨ Success!

If you see the College of Excellence website with:
- ✅ Beautiful animated landing page
- ✅ Working navigation
- ✅ Filterable gallery
- ✅ Functional contact form

**Congratulations! Your application is running successfully! 🎉**

---

## 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Review the error messages carefully
3. Check both terminal windows for errors
4. Verify all installation steps were completed
5. Check browser console (F12) for frontend errors

---

**Happy Coding! 🚀**
