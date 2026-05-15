-- Allow the pure Vite client to perform public writes safely under RLS.
CREATE POLICY "Anyone can record visits" ON public.site_visits
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can record button clicks" ON public.button_clicks
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can send contact messages" ON public.contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- RPC helpers used by the Vite-only admin bootstrap flow.
CREATE OR REPLACE FUNCTION public.admin_exists()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin');
$$;

REVOKE EXECUTE ON FUNCTION public.admin_exists() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_exists() TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.claim_first_admin(_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL OR auth.uid() <> _user_id THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    RAISE EXCEPTION 'Admin allaqachon mavjud';
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (_user_id, 'admin');

  RETURN true;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.claim_first_admin(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_first_admin(uuid) TO authenticated;
