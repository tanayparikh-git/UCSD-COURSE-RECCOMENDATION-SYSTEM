# MagicPatterns + Supabase Setup Guide

## 🎨 **MagicPatterns Frontend Setup**

### **Step 1: Create MagicPatterns Account**

1. Visit: https://magicpatterns.com
2. Sign up for a free account
3. Create a new project called "Course Recommendation System"

### **Step 2: Connect to Supabase**

#### **A. Get Your Supabase Credentials**

Your Supabase credentials are already in your `.env` file:

- **Project URL**: `https://snrkourgqlpkketqlgte.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0`

#### **B. In MagicPatterns Dashboard**

1. Go to your project dashboard
2. Click on "Settings" or "Integrations"
3. Look for "Database" or "Supabase" integration
4. Add your Supabase credentials:
   - **Supabase URL**: `https://snrkourgqlpkketqlgte.supabase.co`
   - **Supabase Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0`

### **Step 3: Build Your UI Components**

#### **A. Course Search Component**

1. **Add a Search Input**:

   - Drag a "Text Input" component
   - Set placeholder: "Search for courses..."
   - Style it with modern design

2. **Add Search Button**:
   - Drag a "Button" component
   - Set text: "Search Courses"
   - Style with primary color

#### **B. Course Results Component**

1. **Add a Results Container**:

   - Drag a "Container" or "Card Grid" component
   - This will display search results

2. **Course Card Template**:
   - Create a card component with:
     - Course Code (e.g., "CSE 101")
     - Course Name (e.g., "Introduction to Computer Science")
     - Course Units (e.g., "4 units")
     - Course Description (truncated)
     - "View Details" button

#### **C. Course Details Modal**

1. **Add a Modal Component**:
   - Drag a "Modal" or "Dialog" component
   - Include:
     - Full course name
     - Complete description
     - Prerequisites
     - Units
     - "Add to Favorites" button

### **Step 4: Connect to Database**

#### **A. Create Database Query**

1. In MagicPatterns, go to "Data" or "Database" section
2. Create a new query called "search_courses"
3. Set up the query to search the `courses` table:

```sql
SELECT * FROM courses
WHERE
  course_name ILIKE '%{{search_term}}%'
  OR course_code ILIKE '%{{search_term}}%'
  OR course_description ILIKE '%{{search_term}}%'
LIMIT 20;
```

#### **B. Connect Search to Database**

1. Link your search input to the query
2. Set the `search_term` parameter to the input value
3. Connect the results to your course cards

### **Step 5: Add Recommendation Features**

#### **A. Popular Courses Section**

1. Create a query for popular courses:

```sql
SELECT * FROM courses
ORDER BY RANDOM()
LIMIT 6;
```

#### **B. Course Categories**

1. Add filter buttons for different departments
2. Create queries for each category

### **Step 6: Styling and UX**

#### **A. Modern Design Elements**

- Use a clean, modern color scheme
- Add proper spacing and typography
- Include loading states for search
- Add smooth animations

#### **B. Responsive Design**

- Ensure the design works on mobile
- Test different screen sizes
- Optimize for touch interactions

### **Step 7: Advanced Features (Optional)**

#### **A. User Authentication**

- Add login/signup functionality
- Connect to Supabase Auth
- Store user preferences

#### **B. Course Favorites**

- Add a favorites system
- Store user's favorite courses
- Display personalized recommendations

#### **C. Course Reviews**

- Add a review system
- Allow users to rate courses
- Display average ratings

## 🚀 **Deployment to Vercel**

### **Step 1: Export from MagicPatterns**

1. In MagicPatterns, click "Export" or "Deploy"
2. Choose "Vercel" as deployment platform
3. Connect your Vercel account

### **Step 2: Configure Environment Variables**

In Vercel dashboard, add these environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: `https://snrkourgqlpkketqlgte.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0`

### **Step 3: Deploy**

1. Click "Deploy" in Vercel
2. Wait for deployment to complete
3. Your app will be live at a Vercel URL

## 📱 **Testing Your App**

### **Test Cases**

1. **Search Functionality**:

   - Search for "computer science"
   - Search for course codes like "CSE"
   - Test with no results

2. **Course Details**:

   - Click on course cards
   - Verify modal opens with full details
   - Test responsive design

3. **Performance**:
   - Check loading times
   - Test on mobile devices
   - Verify database connections

## 🎯 **Next Steps**

1. **Customize the Design**: Add your branding and colors
2. **Add More Features**: Implement user accounts, favorites, reviews
3. **Optimize Performance**: Add caching, pagination
4. **Analytics**: Track user behavior and popular searches

## 🆘 **Troubleshooting**

### **Common Issues**

1. **Database Connection Failed**:

   - Verify Supabase credentials
   - Check RLS policies
   - Test connection in Supabase dashboard

2. **Search Not Working**:

   - Verify query syntax
   - Check parameter binding
   - Test query in Supabase SQL editor

3. **Styling Issues**:
   - Check responsive breakpoints
   - Verify CSS classes
   - Test on different browsers

### **Getting Help**

- MagicPatterns Documentation: https://docs.magicpatterns.com
- Supabase Documentation: https://supabase.com/docs
- Vercel Documentation: https://vercel.com/docs
