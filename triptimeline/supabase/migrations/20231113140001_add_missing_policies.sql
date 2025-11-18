-- Add missing RLS policies for trip_days, events, packing_items, and expenses

-- Trip days policies
create policy "Users can view trip days for their trips"
  on public.trip_days for select
  using (
    exists (
      select 1 from public.trips 
      where trips.id = trip_days.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can insert trip days for their trips"
  on public.trip_days for insert
  with check (
    exists (
      select 1 from public.trips 
      where trips.id = trip_days.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can update trip days for their trips"
  on public.trip_days for update
  using (
    exists (
      select 1 from public.trips 
      where trips.id = trip_days.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can delete trip days for their trips"
  on public.trip_days for delete
  using (
    exists (
      select 1 from public.trips 
      where trips.id = trip_days.trip_id 
      and trips.user_id = auth.uid()
    )
  );

-- Events policies
create policy "Users can view events for their trips"
  on public.events for select
  using (
    exists (
      select 1 from public.trip_days 
      join public.trips on trips.id = trip_days.trip_id
      where trip_days.id = events.trip_day_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can insert events for their trips"
  on public.events for insert
  with check (
    exists (
      select 1 from public.trip_days 
      join public.trips on trips.id = trip_days.trip_id
      where trip_days.id = events.trip_day_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can update events for their trips"
  on public.events for update
  using (
    exists (
      select 1 from public.trip_days 
      join public.trips on trips.id = trip_days.trip_id
      where trip_days.id = events.trip_day_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can delete events for their trips"
  on public.events for delete
  using (
    exists (
      select 1 from public.trip_days 
      join public.trips on trips.id = trip_days.trip_id
      where trip_days.id = events.trip_day_id 
      and trips.user_id = auth.uid()
    )
  );

-- Packing items policies
create policy "Users can view packing items for their trips"
  on public.packing_items for select
  using (
    exists (
      select 1 from public.trips 
      where trips.id = packing_items.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can insert packing items for their trips"
  on public.packing_items for insert
  with check (
    exists (
      select 1 from public.trips 
      where trips.id = packing_items.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can update packing items for their trips"
  on public.packing_items for update
  using (
    exists (
      select 1 from public.trips 
      where trips.id = packing_items.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can delete packing items for their trips"
  on public.packing_items for delete
  using (
    exists (
      select 1 from public.trips 
      where trips.id = packing_items.trip_id 
      and trips.user_id = auth.uid()
    )
  );

-- Expenses policies
create policy "Users can view expenses for their trips"
  on public.expenses for select
  using (
    exists (
      select 1 from public.trips 
      where trips.id = expenses.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can insert expenses for their trips"
  on public.expenses for insert
  with check (
    exists (
      select 1 from public.trips 
      where trips.id = expenses.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can update expenses for their trips"
  on public.expenses for update
  using (
    exists (
      select 1 from public.trips 
      where trips.id = expenses.trip_id 
      and trips.user_id = auth.uid()
    )
  );

create policy "Users can delete expenses for their trips"
  on public.expenses for delete
  using (
    exists (
      select 1 from public.trips 
      where trips.id = expenses.trip_id 
      and trips.user_id = auth.uid()
    )
  );

-- AI requests policies
create policy "Users can view their own AI requests"
  on public.ai_requests for select
  using (auth.uid() = user_id);

create policy "Users can insert their own AI requests"
  on public.ai_requests for insert
  with check (auth.uid() = user_id);
