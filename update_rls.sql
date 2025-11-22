-- Drop existing policy to avoid conflicts
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
drop policy if exists "Users can insert their own profile." on public.profiles;
drop policy if exists "Users can update own profile." on public.profiles;

-- Re-create policies
create policy "Public profiles are viewable by everyone." 
on public.profiles for select 
using (true);

create policy "Users can insert their own profile." 
on public.profiles for insert 
with check (auth.uid() = id);

create policy "Users can update own profile." 
on public.profiles for update 
using (auth.uid() = id);

-- Ensure RLS is enabled
alter table public.profiles enable row level security;

-- Grant usage on schema
grant usage on schema public to anon, authenticated;
grant all on all tables in schema public to anon, authenticated;
grant all on all sequences in schema public to anon, authenticated;
