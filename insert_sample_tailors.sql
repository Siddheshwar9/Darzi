-- Insert sample tailors using only the basic columns that exist
-- This script only uses: user_id, shop_name

-- Update your existing tailor
UPDATE public.tailors 
SET shop_name = 'Master Ahmed Tailoring'
WHERE user_id = '8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2';

-- Generate sample tailors (for display only, they can't login)
DO $$
DECLARE
    tailor2_id uuid := gen_random_uuid();
    tailor3_id uuid := gen_random_uuid();
    tailor4_id uuid := gen_random_uuid();
BEGIN
    -- Tailor 2: Priya Sharma
    INSERT INTO public.profiles (id, role, full_name)
    VALUES (tailor2_id, 'tailor', 'Priya Sharma');
    
    INSERT INTO public.tailors (user_id, shop_name)
    VALUES (tailor2_id, 'Priya Sharma Designs');

    -- Tailor 3: Rajesh Kumar
    INSERT INTO public.profiles (id, role, full_name)
    VALUES (tailor3_id, 'tailor', 'Rajesh Kumar');
    
    INSERT INTO public.tailors (user_id, shop_name)
    VALUES (tailor3_id, 'Rajesh Kumar Tailors');

    -- Tailor 4: Fatima Ali
    INSERT INTO public.profiles (id, role, full_name)
    VALUES (tailor4_id, 'tailor', 'Fatima Ali');
    
    INSERT INTO public.tailors (user_id, shop_name)
    VALUES (tailor4_id, 'Fatima Ali Designs');
END $$;
