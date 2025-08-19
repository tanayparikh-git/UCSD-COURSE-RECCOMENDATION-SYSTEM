import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

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
