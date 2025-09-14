import { useAuth } from "@/contexts/AuthContext";
import { hasSupabase, supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export interface ExperienceRow {
  id: string;
  user_id: string;
  job_title: string;
  company: string;
  start_date: string;
  end_date: string | null;
  description: string | null;
  created_at: string;
}

export function useExperiences() {
  const { user } = useAuth();
  const [items, setItems] = useState<ExperienceRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    if (!hasSupabase || !user) { setItems([]); return; }
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    setItems((data as any[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { refresh(); }, [user]);

  const addExperience = async (payload: { job_title: string; company: string; start_date: string; end_date?: string; description?: string; }) => {
    if (!hasSupabase || !user) throw new Error('Supabase not configured or no user');
    const { error } = await supabase.from('experiences').insert({
      user_id: user.id,
      job_title: payload.job_title,
      company: payload.company,
      start_date: payload.start_date,
      end_date: payload.end_date ?? null,
      description: payload.description ?? null,
    });
    if (error) throw error;
    await refresh();
  };

  return { items, loading, error, refresh, addExperience };
}


