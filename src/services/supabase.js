import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ueauycmhfqzlvheynepd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlYXV5Y21oZnF6bHZoZXluZXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NzcxNDksImV4cCI6MjA1MzA1MzE0OX0.VwysHSbDAuZUfT3rYxFj7kA_oZq-zcyWigoaGwwEsPY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
