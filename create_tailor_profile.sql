-- Create a TAILOR profile for a new user
-- You need to sign up with a DIFFERENT email than your customer account
-- After signup, get your new User ID from Supabase Auth and replace below

-- Replace these values:
-- YOUR_TAILOR_USER_ID_HERE = Your new tailor user's UUID from Supabase Auth
-- YOUR_TAILOR_EMAIL_HERE = The email you used to sign up as tailor

-- 1. Delete any existing data (cleanup)
DELETE FROM public.tailors WHERE user_id = '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b';
DELETE FROM public.customers WHERE user_id = '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b';
DELETE FROM public.profiles WHERE id = '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b';

-- 2. Insert tailor profile
INSERT INTO public.profiles (id, role, full_name)
VALUES (
  '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b',
  'tailor',
  'Test Tailor'
);

-- 3. Insert into tailors table
INSERT INTO public.tailors (user_id, shop_name)
VALUES ('6a2c4e67-f7a0-4ad7-ab02-dc964d24802b', 'My Tailor Shop');
