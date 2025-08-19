import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://snrkourgqlpkketqlgte.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// User type for TypeScript
export interface User {
  id: string;
  email: string;
  name?: string;
  created_at?: string;
}

// Auth error type
export interface AuthError {
  message: string;
  status?: number;
}
