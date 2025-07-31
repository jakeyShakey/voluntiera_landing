-- Drop existing table and policies if they exist (for clean setup)
DROP TABLE IF EXISTS stay_in_touch_signups CASCADE;

-- Create stay_in_touch_signups table
CREATE TABLE stay_in_touch_signups (
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

-- Create indexes
CREATE INDEX idx_stay_in_touch_signups_email ON stay_in_touch_signups(email);
CREATE INDEX idx_stay_in_touch_signups_created_at ON stay_in_touch_signups(created_at);
CREATE INDEX idx_stay_in_touch_signups_user_type ON stay_in_touch_signups(user_type);

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

-- Enable RLS
ALTER TABLE stay_in_touch_signups ENABLE ROW LEVEL SECURITY;

-- Create simple policy that allows all operations for anonymous users
-- This is safe for a signup form as we're only allowing inserts
CREATE POLICY "Allow public inserts" ON stay_in_touch_signups
    FOR INSERT 
    WITH CHECK (true);

-- Allow authenticated users to read data (for admin purposes)
CREATE POLICY "Allow authenticated reads" ON stay_in_touch_signups
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Allow service role full access
CREATE POLICY "Allow service role all" ON stay_in_touch_signups
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON stay_in_touch_signups TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT ON stay_in_touch_signups TO authenticated; 