alter table public.profiles
  add column if not exists plan_id text,
  add column if not exists payment_status text,
  add column if not exists purchased_at timestamptz,
  add column if not exists razorpay_payment_id text,
  add column if not exists razorpay_order_id text;
