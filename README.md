# 🎓 UCSD Course Recommendation System

A modern, full-stack course recommendation system built with React, TypeScript, Google Gemini AI, and Supabase.

## 🚀 Features

- **🎨 Modern React UI**: Beautiful, responsive interface built with TypeScript and Tailwind CSS
- **🧠 AI-Powered Recommendations**: Google Gemini AI for intelligent course suggestions
- **📊 5,261 UCSD Courses**: Complete course catalog with real-time search
- **⚡ Fast Performance**: Vite-powered development with instant hot reload
- **🌐 Real-time Database**: Supabase backend with PostgreSQL
- **🔍 Advanced Search**: Semantic search and keyword-based filtering

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **React Router** for navigation

### Backend

- **Python** with Google Gemini AI
- **Supabase** (PostgreSQL) for database
- **Pandas** for data processing

### AI & ML

- **Google Gemini 1.5 Pro** for recommendations
- **Semantic Search** with embeddings
- **Intelligent Course Matching**

## 📁 Project Structure

```
├── src/                          # React frontend
│   ├── components/               # React components
│   ├── pages/                    # Page components
│   ├── contexts/                 # React contexts
│   ├── utils/                    # Utility functions
│   └── App.tsx                   # Main app component
├── backend/                      # Python backend
│   ├── gemini_receng_optimized.py # AI recommendation engine
│   ├── webscraper.py            # Course data scraper
│   ├── clear_and_import.py      # Database import script
│   └── requirements.txt         # Python dependencies
├── data/                         # Data files
│   ├── courses.csv              # Course dataset (5,261 courses)
│   └── embeddings_cache.pkl     # AI embeddings cache
├── docs/                         # Documentation
│   ├── MAGICPATTERNS_WITH_API_KEY.md
│   └── SUPABASE_SETUP_GUIDE.md
└── package.json                  # Node.js dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.8+
- Google Gemini API key
- Supabase account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/tanayparikh-git/UCSD-Course-Reccomendation.git
cd UCSD-Course-Reccomendation
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Install backend dependencies**

```bash
pip install -r requirements.txt
```

4. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env with your API keys
```

### Environment Variables

```env
# Google Gemini AI
GOOGLE_API_KEY=your_gemini_api_key

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

1. **Start the frontend development server**

```bash
npm run dev
```

2. **Run the backend AI engine**

```bash
python backend/gemini_receng_optimized.py
```

3. **Open your browser** to `http://localhost:5173`

## 🎨 UI Features

### Modern Design

- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: CSS transitions and micro-interactions
- **Accessibility**: WCAG compliant design

### Course Search

- **Real-time Search**: Instant results as you type
- **Advanced Filters**: Filter by department, units, prerequisites
- **Semantic Search**: Find courses by meaning, not just keywords
- **AI Recommendations**: Personalized course suggestions

### Course Display

- **Course Cards**: Clean, informative course information
- **Detailed Views**: Full course descriptions and prerequisites
- **Similar Courses**: AI-powered course recommendations
- **Save Favorites**: Bookmark courses for later

## 🧠 AI Features

### Intelligent Recommendations

- **User Interest Analysis**: Understand what you want to learn
- **Prerequisite Tracking**: Ensure you meet course requirements
- **Difficulty Matching**: Suggest courses at your level
- **Learning Paths**: Create sequences of related courses

### Semantic Search

- **Natural Language**: Search using everyday language
- **Context Understanding**: AI understands course relationships
- **Smart Ranking**: Most relevant courses appear first
- **Query Expansion**: Find courses even with partial information

## 🌐 API Integration

### Supabase REST API

- **Real-time Data**: Live course information
- **User Authentication**: Secure user accounts
- **Favorites System**: Save preferred courses
- **Search Analytics**: Track popular searches

### Frontend-Backend Communication

- **RESTful API**: Clean, predictable endpoints
- **TypeScript Types**: Type-safe API calls
- **Error Handling**: Graceful error management
- **Loading States**: Smooth user experience

## 🚀 Deployment

### Frontend (Vercel)

```bash
npm run build
# Deploy to Vercel
```

### Backend (Railway/Render)

```bash
# Deploy Python backend
# Set environment variables
```

## 📊 Database Schema

### Courses Table

```sql
CREATE TABLE courses (
    id UUID PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE,
    course_name TEXT,
    course_units VARCHAR(10),
    course_description TEXT,
    prerequisites TEXT
);
```

## 🔒 Security

- **Environment Variables**: Secure API key management
- **Supabase RLS**: Row-level security for data
- **CORS Configuration**: Secure cross-origin requests
- **Input Validation**: Sanitize user inputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- **Documentation**: Check the `docs/` folder
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions

## 🎉 Acknowledgments

- **UCSD**: Course data source
- **Google**: Gemini AI platform
- **Supabase**: Database and backend
- **Vite**: Fast build tool
- **Tailwind CSS**: Utility-first CSS framework

---

**Built with ❤️ for better course discovery at UCSD**
