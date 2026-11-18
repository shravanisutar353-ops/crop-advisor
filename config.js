// Fill these in from Supabase: Project Settings -> API
const SUPABASE_URL = "https://YOUR-PROJECT-ID.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_PUBLIC_KEY";

// Your GitHub Pages address (no trailing slash). Used for email verification links.
const SITE_URL = "https://shravanisutar353-ops.github.io/crop-advisor";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
