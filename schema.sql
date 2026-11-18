-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run

create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  latitude double precision,
  longitude double precision,
  crop text,
  n double precision,
  p double precision,
  k double precision,
  ph double precision,
  updated_at timestamptz default now()
);

alter table profiles enable row level security;

-- Each user can only read and change their own row.
create policy "users manage own profile"
on profiles for all
using (auth.uid() = id)
with check (auth.uid() = id);
