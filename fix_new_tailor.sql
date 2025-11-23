-- Create tailor profile for user: 8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2

-- 1. Clean up any existing data
DELETE FROM public.customers WHERE user_id = '8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2';
DELETE FROM public.tailors WHERE user_id = '8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2';
DELETE FROM public.profiles WHERE id = '8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2';

-- 2. Create tailor profile
INSERT INTO public.profiles (id, role, full_name)
VALUES ('8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2', 'tailor', 'Test Tailor');

-- 3. Create tailor entry
INSERT INTO public.tailors (user_id, shop_name)
VALUES ('8d6a3e4d-7a96-4473-b0d2-2e4d7b01c8f2', 'My Tailor Shop');
