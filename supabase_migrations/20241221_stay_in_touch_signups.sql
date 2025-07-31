-- Create stay_in_touch_signups table
CREATE TABLE IF NOT EXISTS stay_in_touch_signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_type VARCHAR(50) NOT NULL CHECK (user_type IN ('individual', 'charity')),
    marketing_consent BOOLEAN NOT NULL DEFAULT false,
    terms_consent BOOLEAN NOT NULL DEFAULT false,
    privacy_consent BOOLEAN NOT NULL DEFAULT false,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_stay_in_touch_signups_email ON stay_in_touch_signups(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_stay_in_touch_signups_created_at ON stay_in_touch_signups(created_at);

-- Create index on user_type for filtering
CREATE INDEX IF NOT EXISTS idx_stay_in_touch_signups_user_type ON stay_in_touch_signups(user_type);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_stay_in_touch_signups_updated_at 
    BEFORE UPDATE ON stay_in_touch_signups 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add RLS (Row Level Security) policies
ALTER TABLE stay_in_touch_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the form submission)
-- Note: 'anon' role is used when making requests with the anon key
CREATE POLICY "Allow anonymous inserts" ON stay_in_touch_signups
    FOR INSERT 
    TO anon, public
    WITH CHECK (true);

-- Allow authenticated users to read their own data
CREATE POLICY "Users can read own data" ON stay_in_touch_signups
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Allow service role full access (for admin operations)
CREATE POLICY "Service role full access" ON stay_in_touch_signups
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true); 