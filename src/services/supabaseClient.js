import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
