import { createClient } from '@supabase/supabase-js';

// These should be in environment variables (.env.local)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be provided in .env.local");
}

// Export the client to be used throughout the application
export const supabase = createClient(supabaseUrl, supabaseAnonKey);