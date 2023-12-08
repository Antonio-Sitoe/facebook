import { createClient } from "@supabase/supabase-js";
export const REACT_APP_SUPABASE_URL = "https://imdpzjabwvspbbzwtino.supabase.co"
export const REACT_APP_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltZHB6amFid3ZzcGJiend0aW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMTUyNzMsImV4cCI6MjAxNzU5MTI3M30.eCwUPyvYr-QqPHXzcCHyAYFQaqtXxsG7JkuzaWsW5Qg"


export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY
);
