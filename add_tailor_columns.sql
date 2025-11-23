-- Add missing columns to tailors table
ALTER TABLE public.tailors 
ADD COLUMN IF NOT EXISTS location TEXT,
ADD COLUMN IF NOT EXISTS specialty TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS experience_years INTEGER DEFAULT 0;
