-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create profiles table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  display_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Create trips table
create table if not exists public.trips (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  start_date date not null,
  end_date date not null,
  destination text not null,
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  is_public boolean default false,
  currency text default 'USD',
  constraint valid_dates check (end_date >= start_date)
);

-- Enable RLS on trips
alter table public.trips enable row level security;

-- Create trip_days table
create table if not exists public.trip_days (
  id uuid default uuid_generate_v4() primary key,
  trip_id uuid references public.trips on delete cascade not null,
  date date not null,
  day_index integer not null,
  title text,
  created_at timestamptz default now(),
  constraint unique_trip_day unique (trip_id, day_index)
);

-- Enable RLS on trip_days
alter table public.trip_days enable row level security;

-- Create events table
create table if not exists public.events (
  id uuid default uuid_generate_v4() primary key,
  trip_day_id uuid references public.trip_days on delete cascade not null,
  title text not null,
  start_time time,
  end_time time,
  category text,
  location_name text,
  location_address text,
  location_lat numeric,
  location_lng numeric,
  cost_amount numeric,
  cost_currency text,
  notes text,
  order_index integer not null default 0,
  created_at timestamptz default now(),
  constraint valid_times check (end_time is null or start_time is null or end_time > start_time)
);

-- Enable RLS on events
alter table public.events enable row level security;

-- Create packing_items table
create table if not exists public.packing_items (
  id uuid default uuid_generate_v4() primary key,
  trip_id uuid references public.trips on delete cascade not null,
  name text not null,
  category text,
  is_checked boolean default false,
  priority integer,
  created_at timestamptz default now()
);

-- Enable RLS on packing_items
alter table public.packing_items enable row level security;

-- Create expenses table
create table if not exists public.expenses (
  id uuid default uuid_generate_v4() primary key,
  trip_id uuid references public.trips on delete cascade not null,
  trip_day_id uuid references public.trip_days on delete set null,
  event_id uuid references public.events on delete set null,
  label text not null,
  amount numeric not null,
  currency text not null,
  category text,
  created_at timestamptz default now()
);

-- Enable RLS on expenses
alter table public.expenses enable row level security;

-- Create ai_requests table
create table if not exists public.ai_requests (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  trip_id uuid references public.trips on delete cascade,
  type text not null,
  tokens_used integer,
  created_at timestamptz default now()
);

-- Enable RLS on ai_requests
alter table public.ai_requests enable row level security;

-- Create indexes for better performance
create index idx_trips_user_id on public.trips(user_id);
create index idx_trip_days_trip_id on public.trip_days(trip_id);
create index idx_events_trip_day_id on public.events(trip_day_id);
create index idx_packing_items_trip_id on public.packing_items(trip_id);
create index idx_expenses_trip_id on public.expenses(trip_id);
create index idx_expenses_trip_day_id on public.expenses(trip_day_id);
create index idx_ai_requests_user_id on public.ai_requests(user_id);

-- Set up RLS policies
-- Profiles policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Trips policies
create policy "Users can view their own trips"
  on public.trips for select
  using (auth.uid() = user_id);

create policy "Public trips are viewable by everyone"
  on public.trips for select
  using (is_public = true);

create policy "Users can insert their own trips"
  on public.trips for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own trips"
  on public.trips for update
  using (auth.uid() = user_id);

create policy "Users can delete their own trips"
  on public.trips for delete
  using (auth.uid() = user_id);

-- Similar policies for other tables...

-- Create a function to handle updated_at timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger handle_trips_updated_at
before update on public.trips
for each row execute procedure public.handle_updated_at();

-- Create a function to create a profile for new users
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->>'display_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user signups
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create a function to create trip days when a trip is created
create or replace function public.create_trip_days()
returns trigger as $$
declare
  day_count integer;
  i integer := 0;
  day_date date;
begin
  day_count := (NEW.end_date - NEW.start_date) + 1;
  
  for i in 0..day_count-1 loop
    day_date := NEW.start_date + (i * interval '1 day');
    
    insert into public.trip_days (trip_id, date, day_index, title)
    values (
      NEW.id,
      day_date,
      i + 1,
      case when i = 0 then 'Arrival Day' 
           when i = day_count-1 then 'Departure Day' 
           else 'Day ' || (i + 1) 
      end
    );
  end loop;
  
  return NEW;
end;
$$ language plpgsql security definer;

-- Create trigger for new trips
create or replace trigger on_trip_created
  after insert on public.trips
  for each row execute procedure public.create_trip_days();
