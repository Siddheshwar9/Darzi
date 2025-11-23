-- Clean up and create fresh profile
-- User ID: 6a2c4e67-f7a0-4ad7-ab02-dc964d24802b

-- 1. Delete any existing profiles for this user (to start fresh)
DELETE FROM public.customers WHERE user_id = '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b';
DELETE FROM public.tailors WHERE user_id = '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b';
DELETE FROM public.profiles WHERE id = '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b';

-- 2. Insert a fresh profile (only using columns that exist)
INSERT INTO public.profiles (id, role, full_name)
VALUES (
  '6a2c4e67-f7a0-4ad7-ab02-dc964d24802b',
  'customer',
  'Test User'
);

-- 3. Insert into the customers table
INSERT INTO public.customers (user_id)
VALUES ('6a2c4e67-f7a0-4ad7-ab02-dc964d24802b');
