# 🎓 Course Recommendation System

A comprehensive course recommendation system built with Google Gemini AI, Supabase, and modern web technologies.

## 🚀 Features

- **5,261 UCSD Courses**: Complete course catalog with search functionality
- **AI-Powered Recommendations**: Google Gemini AI for intelligent course suggestions
- **Modern Web Interface**: Clean, responsive design
- **Real-time Search**: Instant course search by name, code, or description
- **Supabase Backend**: Scalable database with real-time capabilities

## 🛠️ Tech Stack

- **Backend**: Python, Google Gemini AI, Supabase
- **Frontend**: HTML, CSS, JavaScript
- **Database**: Supabase (PostgreSQL)
- **AI**: Google Gemini 1.5 Pro
- **Deployment**: Vercel (frontend), Railway/Render (backend)

## 📁 Project Structure

```
├── frontend.html              # Main web interface
├── gemini_receng_optimized.py # AI recommendation engine
├── webscraper.py             # Course data scraper
├── courses.csv               # Course dataset (5,261 courses)
├── clear_and_import.py       # Database import script
├── requirements.txt          # Python dependencies
├── .env                      # Environment variables (not in repo)
└── docs/                     # Documentation
    ├── QUICK_START_MAGICPATTERNS.md
    └── MAGICPATTERNS_WITH_API_KEY.md
```

## 🚀 Quick Start

### Option 1: Use the Ready-Made Frontend (1 minute)
1. **Open `frontend.html`** in your browser
2. **Search for courses** - try "computer science", "math", "physics"
3. **That's it!** No setup needed

### Option 2: Deploy to Vercel (5 minutes)
1. Go to [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Deploy `frontend.html`
4. Get a live URL instantly

### Option 3: Use MagicPatterns (10 minutes)
1. Follow the guide in `MAGICPATTERNS_WITH_API_KEY.md`
2. Use your MagicPatterns API key
3. Build custom UI components

## 🔧 Development Setup

### Prerequisites
- Python 3.8+
- Google Gemini API key
- Supabase account

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd indep

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys
```

### Environment Variables
Create a `.env` file with:
```env
GOOGLE_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Database Schema

### Courses Table
- `id`: UUID (Primary Key)
- `course_code`: VARCHAR(20) - Course code (e.g., "CSE 101")
- `course_name`: TEXT - Course name
- `course_units`: VARCHAR(10) - Credit units
- `course_description`: TEXT - Course description
- `prerequisites`: TEXT - Prerequisites

## 🧠 AI Recommendation Engine

The system uses Google Gemini AI to provide intelligent course recommendations based on:
- User interests
- Completed courses
- Course similarity
- Prerequisites

### Features
- **Semantic Search**: Find courses by meaning, not just keywords
- **Smart Recommendations**: AI-powered course suggestions
- **Caching**: Optimized performance with embedding cache
- **Similarity Matching**: Find similar courses

## 🌐 API Endpoints

### Supabase REST API
- `GET /rest/v1/courses` - Get all courses
- `GET /rest/v1/courses?select=*&or=(course_name.ilike.%term%)` - Search courses
- `GET /rest/v1/courses?id=eq.{id}` - Get specific course

### Frontend Integration
The frontend connects directly to Supabase using the JavaScript client.

## 🎨 UI Components

### Search Interface
- Real-time search input
- Course results grid
- Responsive design
- Modern styling

### Course Cards
- Course code and name
- Credit units
- Description preview
- Hover effects

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Deploy automatically on push
3. Custom domain support

### Backend (Railway/Render)
1. Deploy Python backend
2. Set environment variables
3. Connect to Supabase

## 📈 Performance

- **5,261 courses** in database
- **Real-time search** with instant results
- **AI-powered recommendations** with caching
- **Responsive design** for all devices

## 🔒 Security

- **Environment variables** for sensitive data
- **Supabase RLS** for database security
- **API key management** for external services
- **CORS configuration** for web security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: Check the `docs/` folder
- **Issues**: Create an issue on GitHub
- **Questions**: Check the troubleshooting guides

## 🎉 Acknowledgments

- **UCSD**: Course data source
- **Google**: Gemini AI platform
- **Supabase**: Database and backend
- **MagicPatterns**: UI components (optional)

---

**Built with ❤️ for better course discovery**
