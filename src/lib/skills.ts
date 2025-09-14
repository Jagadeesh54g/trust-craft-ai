import { useAuth } from "@/contexts/AuthContext";
import { hasSupabase, supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export interface SkillRow {
  id: string;
  user_id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  status: 'pending' | 'verified' | 'failed';
  score: number | null;
  last_tested: string | null;
  description: string | null;
  created_at: string;
}

export function useSkills() {
  const { user } = useAuth();
  const [skills, setSkills] = useState<SkillRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    if (!hasSupabase || !user) { setSkills([]); return; }
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    setSkills((data as any[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { refresh(); }, [user]);

  const addSkill = async (name: string, level: SkillRow['level'], description?: string) => {
    if (!hasSupabase || !user) throw new Error('Supabase not configured or no user');
    const { error } = await supabase.from('skills').insert({
      user_id: user.id,
      name,
      level,
      description: description ?? null,
    });
    if (error) throw error;
    await refresh();
  };

  return { skills, loading, error, refresh, addSkill };
}




