# AI Screenshot Explainer

A simple web application that uses OpenAI's Vision API to analyze screenshots and provide insights.

## Features

- 🖼️ Drag and drop image upload
- 🤖 AI-powered image analysis using OpenAI Vision API
- 📊 Results displayed in three cards: Summary, Key Elements, and Recommendations
- 🌓 Light and Dark mode toggle
- ⚡ Built with React + Vite
- 🎨 Clean, minimal UI

## Setup

### Frontend

1. Navigate to the frontend directory:
```bash
cd screenshot-explainer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the next available port).

### Backend

1. Navigate to the backend directory:
```bash
cd screenshot-explainer-server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`.

## Usage

1. Start both the frontend and backend servers
2. Open the frontend URL in your browser
3. Drag and drop an image or click to select one
4. Wait for the AI analysis
5. View the results in the three cards

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **AI**: OpenAI Vision API (GPT-4o)
- **File Upload**: Multer

## Notes

- Maximum file size: 10MB
- Supported formats: JPG, PNG, GIF, WebP
- No database required - all processing is done in real-time

## 🚀 Deployment

Ready to publish your app? See the deployment guides:

- **[QUICK_DEPLOY.md](../QUICK_DEPLOY.md)** - Fastest way to deploy (8 minutes)
- **[DEPLOYMENT.md](../DEPLOYMENT.md)** - Detailed deployment instructions
- **[prepare-deploy.md](../prepare-deploy.md)** - Pre-deployment checklist

### Recommended Setup

- **Frontend**: Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- **Backend**: Deploy to [Railway](https://railway.app) or [Render](https://render.com)

Both platforms offer free tiers perfect for this app!

