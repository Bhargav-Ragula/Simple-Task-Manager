// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lzctkgjdikunpmybswbs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Y3RrZ2pkaWt1bnBteWJzd2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzOTgxOTgsImV4cCI6MjA1Njk3NDE5OH0.hVy1LkxA2spm_QsDZFkZUAFGh9oLIsZ8HbYcTVFtoO8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);