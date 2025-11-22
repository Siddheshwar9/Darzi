-- Create profiles table
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  role text check (role in ('customer', 'tailor')),
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create customers table
create table public.customers (
  user_id uuid references public.profiles(id) not null primary key,
  phone text,
  address text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create tailors table
create table public.tailors (
  user_id uuid references public.profiles(id) not null primary key,
  shop_name text,
  bio text,
  specialty text,
  rating numeric default 0,
  location text,
  experience_years integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create orders table
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  customer_id uuid references public.profiles(id) not null,
  tailor_id uuid references public.profiles(id) not null,
  status text default 'pending' check (status in ('pending', 'accepted', 'measuring', 'in_progress', 'completed', 'cancelled')),
  amount numeric,
  design_url text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create measurements table
create table public.measurements (
  id uuid default gen_random_uuid() primary key,
  customer_id uuid references public.profiles(id) not null,
  name text, -- e.g., "Standard Fit", "Traditional"
  values_json jsonb not null, -- Stores actual measurements
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create reviews table
create table public.reviews (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.orders(id) not null,
  customer_id uuid references public.profiles(id) not null,
  tailor_id uuid references public.profiles(id) not null,
  rating integer check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.customers enable row level security;
alter table public.tailors enable row level security;
alter table public.orders enable row level security;
alter table public.measurements enable row level security;
alter table public.reviews enable row level security;

-- Policies (Basic examples, refine as needed)
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

create policy "Customers viewable by self" on public.customers for select using (auth.uid() = user_id);
create policy "Tailors viewable by everyone" on public.tailors for select using (true);

create policy "Orders viewable by involved parties" on public.orders for select using (auth.uid() = customer_id or auth.uid() = tailor_id);
