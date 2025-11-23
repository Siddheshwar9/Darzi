-- Create a CUSTOMER profile for a new user
-- After signing up at /auth, get your User ID from Supabase Auth and replace below

-- Replace these values:
-- YOUR_CUSTOMER_USER_ID_HERE = Your new customer user's UUID from Supabase Auth

-- 1. Clean up any existing data
DELETE FROM public.tailors WHERE user_id = 'YOUR_CUSTOMER_USER_ID_HERE';
DELETE FROM public.customers WHERE user_id = 'YOUR_CUSTOMER_USER_ID_HERE';
DELETE FROM public.profiles WHERE id = 'YOUR_CUSTOMER_USER_ID_HERE';

-- 2. Create customer profile
INSERT INTO public.profiles (id, role, full_name)
VALUES ('YOUR_CUSTOMER_USER_ID_HERE', 'customer', 'Test Customer');

-- 3. Create customer entry
INSERT INTO public.customers (user_id)
VALUES ('YOUR_CUSTOMER_USER_ID_HERE');
