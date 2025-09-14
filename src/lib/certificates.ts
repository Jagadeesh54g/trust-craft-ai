import { useAuth } from "@/contexts/AuthContext";
import { hasSupabase, supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export interface CertificateRow {
  id: string;
  user_id: string;
  name: string;
  issuer: string | null;
  issue_date: string | null;
  credential_id: string | null;
  file_path: string | null;
  verified: boolean;
  created_at: string;
}

export function useCertificates() {
  const { user } = useAuth();
  const [certs, setCerts] = useState<CertificateRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    if (!hasSupabase || !user) { setCerts([]); return; }
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    setCerts((data as any[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { refresh(); }, [user]);

  const addCertificate = async (payload: { name: string; issuer?: string; issue_date?: string; credential_id?: string; file_path?: string; }) => {
    if (!hasSupabase || !user) throw new Error('Supabase not configured or no user');
    const { error } = await supabase.from('certificates').insert({
      user_id: user.id,
      name: payload.name,
      issuer: payload.issuer ?? null,
      issue_date: payload.issue_date ?? null,
      credential_id: payload.credential_id ?? null,
      file_path: payload.file_path ?? null,
    });
    if (error) throw error;
    await refresh();
  };

  return { certs, loading, error, refresh, addCertificate };
}


