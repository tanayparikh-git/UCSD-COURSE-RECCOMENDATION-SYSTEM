# 🎨 MagicPatterns + API Key Setup Guide

## 🚀 **Using Your MagicPatterns API Key**

### **Step 1: Access MagicPatterns API**

1. **Go to MagicPatterns**: https://magicpatterns.com
2. **Sign in** to your account
3. **Create a new project** or open existing one
4. **Look for API/Integrations section** in your dashboard

### **Step 2: Configure External API Connection**

In MagicPatterns, you'll need to set up an external API connection to Supabase:

#### **A. Add External API**

1. Go to **Settings** → **Integrations** or **API**
2. Look for **"External API"** or **"Custom API"**
3. Click **"Add New API"**

#### **B. Configure Supabase Connection**

Use these settings:

**API Name**: `Supabase Courses`
**Base URL**: `https://snrkourgqlpkketqlgte.supabase.co/rest/v1`
**Authentication**: `Bearer Token`
**API Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0`

**Headers**:

```
apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0
```

### **Step 3: Create API Endpoints**

#### **A. Search Courses Endpoint**

- **Method**: `GET`
- **URL**: `/courses`
- **Query Parameters**:
  - `select=*`
  - `or=(course_name.ilike.%{{search_term}}%,course_code.ilike.%{{search_term}}%,course_description.ilike.%{{search_term}}%)`
  - `limit=20`

#### **B. Popular Courses Endpoint**

- **Method**: `GET`
- **URL**: `/courses`
- **Query Parameters**:
  - `select=*`
  - `limit=6`

#### **C. Course by ID Endpoint**

- **Method**: `GET`
- **URL**: `/courses?id=eq.{{course_id}}`

### **Step 4: Build Your UI Components**

#### **A. Search Interface**

1. **Add Text Input**:

   - Drag a text input component
   - Set placeholder: "Search for courses..."
   - Connect to search endpoint

2. **Add Search Button**:
   - Drag a button component
   - Set text: "Search"
   - Connect to trigger search

#### **B. Results Display**

1. **Add Container**:

   - Drag a container/grid component
   - Connect to search results

2. **Add Course Card Template**:
   - Create a card component with:
     - Course Code: `{{course_code}}`
     - Course Name: `{{course_name}}`
     - Units: `{{course_units}} units`
     - Description: `{{course_description}}`

### **Step 5: Connect Components**

#### **A. Search Flow**

1. **Input** → **Search Button** → **API Call** → **Results Container**
2. **Parameter Mapping**: `search_term` = input value

#### **B. Results Display**

1. **API Response** → **Course Cards**
2. **Data Mapping**: Map API response fields to card components

### **Step 6: Test Your Integration**

#### **A. Test Search**

1. Type "computer science" in search box
2. Click search button
3. Verify courses appear

#### **B. Test Popular Courses**

1. Load popular courses section
2. Verify 6 courses display

## 🔧 **Alternative: Custom JavaScript**

If MagicPatterns supports custom JavaScript, you can use this:

```javascript
// Initialize Supabase client
const supabaseUrl = "https://snrkourgqlpkketqlgte.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0";

// Search courses function
async function searchCourses(searchTerm) {
  const response = await fetch(
    `${supabaseUrl}/rest/v1/courses?select=*&or=(course_name.ilike.%${searchTerm}%,course_code.ilike.%${searchTerm}%,course_description.ilike.%${searchTerm}%)&limit=20`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    }
  );
  return await response.json();
}

// Get popular courses function
async function getPopularCourses() {
  const response = await fetch(
    `${supabaseUrl}/rest/v1/courses?select=*&limit=6`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    }
  );
  return await response.json();
}
```

## 🎯 **MagicPatterns Specific Features**

### **A. Use MagicPatterns Components**

- **Text Input**: For search
- **Button**: For search trigger
- **Card Grid**: For course display
- **Modal**: For course details
- **Loading States**: For better UX

### **B. Styling**

- Use MagicPatterns design system
- Apply consistent spacing
- Use responsive breakpoints
- Add hover effects

### **C. Advanced Features**

- **Pagination**: For large result sets
- **Filtering**: By department, units, etc.
- **Sorting**: By relevance, name, etc.
- **Favorites**: Save preferred courses

## 🚀 **Deploy to Vercel**

1. **In MagicPatterns**:

   - Click "Deploy" or "Export"
   - Choose "Vercel"
   - Connect your Vercel account

2. **Environment Variables** (if needed):
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://snrkourgqlpkketqlgte.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0`

## 🆘 **Troubleshooting**

### **Common Issues:**

1. **CORS Errors**: MagicPatterns should handle this
2. **Authentication**: Verify API key is correct
3. **Data Mapping**: Check field names match exactly
4. **Rate Limits**: Supabase has generous limits

### **Testing:**

1. **Test API directly**: Use Postman or curl
2. **Check MagicPatterns logs**: Look for error messages
3. **Verify Supabase connection**: Test in Supabase dashboard

## 🎉 **You're Ready!**

With your MagicPatterns API key, you can:

- ✅ Build beautiful UI components
- ✅ Connect directly to Supabase
- ✅ Deploy to Vercel easily
- ✅ Scale your application

**Start building in MagicPatterns now!** 🚀
