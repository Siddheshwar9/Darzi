-- 1. First, get your User ID from the Authentication tab in Supabase
-- Replace 'YOUR_USER_ID_HERE' with your actual UUID (e.g., 'a0eebc99-9c0b-...')

DO $$
DECLARE
  target_user_id uuid := '01667ac5-fa82-41a0-a94c-9d6816567acf'; 
  user_email text := 'siddeshwarpandey123@gmail.com';  
  user_role text := 'customer';               -- 'customer' or 'tailor'
BEGIN
  -- Insert into profiles if not exists
  INSERT INTO public.profiles (id, email, role, full_name)
  VALUES (target_user_id, user_email, user_role, 'Manual Fix User')
  ON CONFLICT (id) DO NOTHING;

  -- Insert into role-specific table
  IF user_role = 'customer' THEN
    INSERT INTO public.customers (user_id)
    VALUES (target_user_id)
    ON CONFLICT (user_id) DO NOTHING;
  ELSIF user_role = 'tailor' THEN
    INSERT INTO public.tailors (user_id)
    VALUES (target_user_id)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
END $$;
