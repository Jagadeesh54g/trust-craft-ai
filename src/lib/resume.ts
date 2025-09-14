import { supabase, hasSupabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

export interface ResumeVersion {
  id: string;
  user_id: string;
  file_path: string;
  created_at: string;
  signed_url?: string;
}

export function useResumeVersions() {
  const { user } = useAuth();
  const [versions, setVersions] = useState<ResumeVersion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    if (!hasSupabase || !user) return setVersions([]);
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('resume_versions')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    const withUrls: ResumeVersion[] = [];
    for (const v of data as any[]) {
      const { data: signed } = await supabase
        .storage
        .from('resumes')
        .createSignedUrl(v.file_path, 60 * 10); // 10 min
      withUrls.push({ ...v, signed_url: signed?.signedUrl });
    }
    setVersions(withUrls);
    setLoading(false);
  };

  useEffect(() => { refresh(); }, [user]);

  return { versions, loading, error, refresh };
}

export async function uploadResume(file: File, userId: string) {
  if (!hasSupabase) throw new Error('Supabase not configured');
  const ext = file.name.split('.').pop();
  const path = `${userId}/${Date.now()}.${ext}`;
  const { error: uploadError } = await supabase.storage.from('resumes').upload(path, file, {
    upsert: true,
    contentType: file.type || 'application/octet-stream',
  });
  if (uploadError) throw uploadError;
  const { error: insertError } = await supabase.from('resume_versions').insert({
    user_id: userId,
    file_path: path,
  });
  if (insertError) throw insertError;
  return path;
}




