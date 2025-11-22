-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, role, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'role',
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );

  if (new.raw_user_meta_data->>'role' = 'customer') then
    insert into public.customers (user_id) values (new.id);
  elsif (new.raw_user_meta_data->>'role' = 'tailor') then
    insert into public.tailors (user_id) values (new.id);
  end if;

  return new;
end;
$$;

-- Trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
