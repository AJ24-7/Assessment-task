# College Website Backend

A robust Node.js/Express backend API for the college website with Pipedream webhook integration for form submissions.

## 🚀 Features

- **RESTful API**: Clean and organized API endpoints
- **Form Validation**: Comprehensive validation using express-validator
- **Pipedream Integration**: Automatic forwarding of form data to Pipedream workflows
- **Security**: Helmet.js for security headers, CORS configuration, rate limiting
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Morgan for HTTP request logging
- **In-Memory Storage**: Demo storage for submissions (easily replaceable with database)

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Axios** - HTTP client for Pipedream requests
- **express-validator** - Request validation
- **Helmet** - Security middleware
- **CORS** - Cross-Origin Resource Sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management
- **express-rate-limit** - Rate limiting middleware

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Pipedream account (for webhook integration)

## 🔧 Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=5000
NODE_ENV=development
PIPEDREAM_WEBHOOK_URL=https://your-pipedream-workflow-url.m.pipedream.net
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

5. Start the server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── controllers/
│   └── contactController.js  # Contact form logic
├── middleware/
│   ├── errorHandler.js        # Global error handler
│   └── validateRequest.js     # Validation middleware
├── routes/
│   └── contact.js             # Contact routes
├── server.js                   # Main server file
├── package.json               # Dependencies
├── .env.example               # Environment variables template
└── .gitignore                 # Git ignore rules
```

## 🔌 API Endpoints

### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Submit Contact Form
```http
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "program": "Computer Science & IT",
  "message": "I'm interested in learning more about your programs."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your application has been submitted successfully!",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "program": "Computer Science & IT",
    "submittedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Get All Submissions (Admin)
```http
GET /api/contact
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

## 🔐 Security Features

- **Helmet.js**: Secures Express apps by setting various HTTP headers
- **CORS**: Configured to accept requests only from the frontend URL
- **Rate Limiting**: Prevents abuse by limiting requests per IP
- **Input Validation**: All form inputs are validated and sanitized
- **Error Handling**: Sensitive information is not exposed in production

## 🌐 Pipedream Integration

### Setup Pipedream Webhook

1. Go to [Pipedream](https://pipedream.com/)
2. Create a new workflow
3. Add an HTTP trigger
4. Copy the webhook URL
5. Add it to your `.env` file as `PIPEDREAM_WEBHOOK_URL`

### Data Sent to Pipedream

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "program": "Computer Science & IT",
  "message": "Optional message",
  "submittedAt": "2024-01-01T00:00:00.000Z",
  "source": "College Website"
}
```

### Pipedream Actions You Can Add

- Send email notifications (Gmail, SendGrid, etc.)
- Store in databases (MongoDB, PostgreSQL, Airtable)
- Send to CRM (Salesforce, HubSpot)
- Send Slack/Discord notifications
- Trigger other workflows

## 🎯 Validation Rules

### Contact Form Validation

- **name**: Required, 2-100 characters
- **email**: Required, valid email format
- **phone**: Required, valid phone number format
- **program**: Required, must select a program
- **message**: Optional, max 1000 characters

## 🚀 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 📊 Rate Limiting

Default rate limits:
- Window: 15 minutes (900,000 ms)
- Max requests per window: 100

Customize in `.env`:
```env
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🗄️ Database Integration

Currently uses in-memory storage for demonstration. To integrate a database:

1. Install database driver (e.g., `npm install mongoose` for MongoDB)
2. Create database models
3. Update `contactController.js` to use database instead of array
4. Add database connection in `server.js`

Example with MongoDB:
```javascript
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database error:', err))
```

## 🐛 Error Handling

The API uses centralized error handling:

```javascript
// Custom error example
const error = new Error('Custom error message')
error.statusCode = 400
throw error
```

Errors are caught by the global error handler and return:

```json
{
  "success": false,
  "message": "Error message",
  "stack": "Error stack (development only)"
}
```

## 🧪 Testing the API

### Using cURL

```bash
# Health check
curl http://localhost:5000/api/health

# Submit form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "program": "Computer Science",
    "message": "Test message"
  }'
```

### Using Postman

1. Import the API endpoints
2. Set the base URL to `http://localhost:5000`
3. Test each endpoint with sample data

## 🚀 Deployment

### Deploy to Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set PIPEDREAM_WEBHOOK_URL=your-url
heroku config:set FRONTEND_URL=your-frontend-url

# Deploy
git push heroku main
```

### Deploy to Railway/Render

1. Connect your repository
2. Set environment variables
3. Deploy automatically on push

## 📝 Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| PORT | Server port | No | 5000 |
| NODE_ENV | Environment mode | No | development |
| PIPEDREAM_WEBHOOK_URL | Pipedream webhook URL | Yes | - |
| FRONTEND_URL | Frontend application URL | Yes | http://localhost:3000 |
| RATE_LIMIT_WINDOW_MS | Rate limit window in ms | No | 900000 |
| RATE_LIMIT_MAX_REQUESTS | Max requests per window | No | 100 |

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

Built with ❤️ using Node.js and Express
