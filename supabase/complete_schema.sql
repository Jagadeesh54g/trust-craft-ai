-- Complete Credify Database Schema
-- Run this entire file in Supabase SQL Editor

-- 1. PROFILES TABLE
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  headline text,
  location text,
  bio text,
  email text,
  phone text,
  website text,
  linkedin text,
  github text,
  avatar text,
  cover_image text,
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy if not exists "select_own_profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy if not exists "insert_own_profile"
  on public.profiles for insert
  with check (auth.uid() = user_id);

create policy if not exists "update_own_profile"
  on public.profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy if not exists "delete_own_profile"
  on public.profiles for delete
  using (auth.uid() = user_id);

create index if not exists idx_profiles_user_id on public.profiles(user_id);

-- 2. RESUME VERSIONS TABLE
create table if not exists public.resume_versions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  file_path text not null,
  created_at timestamptz not null default now()
);

alter table public.resume_versions enable row level security;

create policy if not exists "select_own_resume_versions"
  on public.resume_versions for select
  using (auth.uid() = user_id);

create policy if not exists "insert_own_resume_versions"
  on public.resume_versions for insert
  with check (auth.uid() = user_id);

create index if not exists idx_resume_versions_user_created
  on public.resume_versions(user_id, created_at desc);

-- 3. SKILLS TABLE
create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  level text check (level in ('beginner','intermediate','advanced','expert')) default 'beginner',
  status text check (status in ('pending','verified','failed')) default 'pending',
  score int,
  last_tested timestamptz,
  description text,
  created_at timestamptz default now()
);

alter table public.skills enable row level security;

create policy if not exists "select_own_skills" on public.skills for select using (auth.uid() = user_id);
create policy if not exists "insert_own_skills" on public.skills for insert with check (auth.uid() = user_id);
create policy if not exists "update_own_skills" on public.skills for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy if not exists "delete_own_skills" on public.skills for delete using (auth.uid() = user_id);

create index if not exists idx_skills_user_created on public.skills(user_id, created_at desc);

-- 4. SKILL TESTS TABLE
create table if not exists public.skill_tests (
  id uuid primary key default gen_random_uuid(),
  skill_id uuid not null references public.skills(id) on delete cascade,
  type text not null default 'mcq',
  score int,
  result jsonb,
  created_at timestamptz default now()
);

alter table public.skill_tests enable row level security;

create policy if not exists "select_own_skill_tests" on public.skill_tests for select using (
  exists (
    select 1 from public.skills s where s.id = skill_id and s.user_id = auth.uid()
  )
);

create policy if not exists "insert_own_skill_tests" on public.skill_tests for insert with check (
  exists (
    select 1 from public.skills s where s.id = skill_id and s.user_id = auth.uid()
  )
);

-- 5. EXPERIENCES TABLE
create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  job_title text not null,
  company text not null,
  start_date text not null,
  end_date text,
  description text,
  created_at timestamptz default now()
);

alter table public.experiences enable row level security;

create policy if not exists "select_own_experiences" on public.experiences for select using (auth.uid() = user_id);
create policy if not exists "insert_own_experiences" on public.experiences for insert with check (auth.uid() = user_id);
create policy if not exists "update_own_experiences" on public.experiences for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy if not exists "delete_own_experiences" on public.experiences for delete using (auth.uid() = user_id);

create index if not exists idx_experiences_user_created on public.experiences(user_id, created_at desc);

-- 6. PROJECTS TABLE
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  technologies text,
  live_url text,
  github_url text,
  repo_url text,
  status text check (status in ('draft','pending','verified','failed')) default 'draft',
  score int,
  created_at timestamptz default now()
);

alter table public.projects enable row level security;

create policy if not exists "select_own_projects" on public.projects for select using (auth.uid() = user_id);
create policy if not exists "insert_own_projects" on public.projects for insert with check (auth.uid() = user_id);
create policy if not exists "update_own_projects" on public.projects for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy if not exists "delete_own_projects" on public.projects for delete using (auth.uid() = user_id);

create index if not exists idx_projects_user_created on public.projects(user_id, created_at desc);

-- 7. CERTIFICATES TABLE
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  issuer text,
  issue_date text,
  credential_id text,
  file_path text,
  verified boolean default false,
  created_at timestamptz default now()
);

alter table public.certificates enable row level security;

create policy if not exists "select_own_certificates" on public.certificates for select using (auth.uid() = user_id);
create policy if not exists "insert_own_certificates" on public.certificates for insert with check (auth.uid() = user_id);
create policy if not exists "update_own_certificates" on public.certificates for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy if not exists "delete_own_certificates" on public.certificates for delete using (auth.uid() = user_id);

create index if not exists idx_certificates_user_created on public.certificates(user_id, created_at desc);

-- Success message
select 'All Credify tables created successfully!' as message;
