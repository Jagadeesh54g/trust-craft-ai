import { useAuth } from "@/contexts/AuthContext";
import { hasSupabase, supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export interface ProjectRow {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  technologies: string | null;
  live_url: string | null;
  github_url: string | null;
  repo_url: string | null;
  status: 'draft' | 'pending' | 'verified' | 'failed';
  score: number | null;
  created_at: string;
}

export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    if (!hasSupabase || !user) { setProjects([]); return; }
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    setProjects((data as any[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { refresh(); }, [user]);

  const addProject = async (payload: { title: string; description?: string; technologies?: string; live_url?: string; github_url?: string; repo_url?: string; }) => {
    if (!hasSupabase || !user) throw new Error('Supabase not configured or no user');
    const { error } = await supabase.from('projects').insert({
      user_id: user.id,
      title: payload.title,
      description: payload.description ?? null,
      technologies: payload.technologies ?? null,
      live_url: payload.live_url ?? null,
      github_url: payload.github_url ?? null,
      repo_url: payload.repo_url ?? null,
    });
    if (error) throw error;
    await refresh();
  };

  return { projects, loading, error, refresh, addProject };
}


