create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id text not null,
  plan_name text not null,
  amount_paise integer not null,
  currency text not null default 'INR',
  razorpay_order_id text not null,
  razorpay_payment_id text not null,
  razorpay_signature text not null,
  status text not null default 'verified',
  created_at timestamptz not null default now(),
  verified_at timestamptz not null default now()
);

create unique index if not exists purchases_razorpay_payment_id_key
  on public.purchases (razorpay_payment_id);

create unique index if not exists purchases_razorpay_order_id_key
  on public.purchases (razorpay_order_id);

alter table public.purchases enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'purchases'
      and policyname = 'Users can view their own purchases'
  ) then
    create policy "Users can view their own purchases"
    on public.purchases
    for select
    to authenticated
    using (auth.uid() = user_id);
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'purchases'
      and policyname = 'Users can insert their own purchases'
  ) then
    create policy "Users can insert their own purchases"
    on public.purchases
    for insert
    to authenticated
    with check (auth.uid() = user_id);
  end if;
end
$$;
