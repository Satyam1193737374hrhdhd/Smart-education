/**
 * Supabase Client Configuration
 * Initializes and exports the connection to Supabase Cloud PostgreSQL.
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = process.env.SUPABASE_URL || "https://jybnhvlsccruhkdsvvtq.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Ym5odmxzY2NydWhrZHN2dnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NTI5ODQsImV4cCI6MjEwNTAyODk4NH0.9TK6gA-nHvOczZTKABrYJPeOsr4dLowIwumj8i_BPBI";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("❌ [Config] Missing Supabase URL or Anon Key. Please verify .env configuration.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: false,
        autoRefreshToken: false
    }
});

/**
 * Health check ping to confirm Supabase database connectivity
 */
async function checkDatabaseConnection() {
    try {
        const { data, error } = await supabase
            .from('courses')
            .select('id')
            .limit(1);

        if (error) {
            console.warn("⚠️ [Supabase DB Warning]:", error.message);
            return false;
        }
        return true;
    } catch (err) {
        console.error("❌ [Supabase Connection Error]:", err.message);
        return false;
    }
}

module.exports = {
    supabase,
    checkDatabaseConnection
};
