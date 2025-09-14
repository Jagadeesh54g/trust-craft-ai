import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase, hasSupabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileData {
  firstName: string;
  lastName: string;
  headline: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
  avatar: string;
  coverImage: string;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
}

interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  file?: File;
}

interface ProfileContextType {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  addCertificate: (certificate: Omit<Certificate, 'id'>) => void;
}

const defaultProfile: ProfileData = {
  firstName: '',
  lastName: '',
  headline: '',
  location: '',
  bio: '',
  email: '',
  phone: '',
  website: '',
  linkedin: '',
  github: '',
  avatar: '',
  coverImage: '',
  experience: [],
  skills: [],
  projects: [],
  certificates: [],
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const { user } = useAuth();

  // Load profile from Supabase when user changes
  useEffect(() => {
    const load = async () => {
      if (!hasSupabase || !user) {
        setProfile(defaultProfile);
        return;
      }
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      if (error && error.code !== 'PGRST116') {
        console.error('Failed to load profile', error);
        return;
      }
      if (data) {
        setProfile({
          firstName: data.first_name ?? '',
          lastName: data.last_name ?? '',
          headline: data.headline ?? '',
          location: data.location ?? '',
          bio: data.bio ?? '',
          email: data.email ?? '',
          phone: data.phone ?? '',
          website: data.website ?? '',
          linkedin: data.linkedin ?? '',
          github: data.github ?? '',
          avatar: data.avatar ?? '',
          coverImage: data.cover_image ?? '',
          experience: [],
          skills: [],
          projects: [],
          certificates: [],
        });
      } else {
        // Seed an initial profile row so future loads succeed
        const first = user.name?.split(' ')[0] ?? '';
        const last = user.name?.split(' ').slice(1).join(' ') ?? '';
        const payload: any = {
          user_id: user.id,
          first_name: first,
          last_name: last,
          email: user.email,
          updated_at: new Date().toISOString(),
        };
        const { error: insertErr } = await supabase.from('profiles').insert(payload);
        if (insertErr) {
          console.warn('Could not seed profile row', insertErr.message);
        }
        setProfile({
          ...defaultProfile,
          firstName: first,
          lastName: last,
          email: user.email,
        });
      }
    };
    load();
  }, [user]);

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
    // Fire-and-forget upsert to Supabase
    if (hasSupabase && user) {
      const payload = {
        user_id: user.id,
        first_name: data.firstName ?? profile.firstName,
        last_name: data.lastName ?? profile.lastName,
        headline: data.headline ?? profile.headline,
        location: data.location ?? profile.location,
        bio: data.bio ?? profile.bio,
        email: data.email ?? profile.email,
        phone: data.phone ?? profile.phone,
        website: data.website ?? profile.website,
        linkedin: data.linkedin ?? profile.linkedin,
        github: data.github ?? profile.github,
        avatar: data.avatar ?? profile.avatar,
        cover_image: data.coverImage ?? profile.coverImage,
        updated_at: new Date().toISOString(),
      } as any;
      supabase.from('profiles').upsert(payload, { onConflict: 'user_id' }).then(({ error }) => {
        if (error) console.error('Failed to save profile', error);
      });

      // Optionally sync auth user metadata (name) and email with Supabase Auth
      const nextFirst = data.firstName ?? profile.firstName;
      const nextLast = data.lastName ?? profile.lastName;
      const nextName = `${nextFirst ?? ''} ${nextLast ?? ''}`.trim();
      const nextEmail = data.email;
      const update: { email?: string; data?: Record<string, any> } = {};
      if (nextName) update.data = { name: nextName };
      if (nextEmail && nextEmail !== user.email) update.email = nextEmail;
      if (update.email || update.data) {
        supabase.auth.updateUser(update as any).then(({ error }) => {
          if (error) console.warn('Auth user update failed', error.message);
        });
      }
    }
  };

  const addExperience = (experience: Omit<Experience, 'id'>) => {
    const newExperience = { ...experience, id: Date.now().toString() };
    setProfile(prev => ({ 
      ...prev, 
      experience: [...prev.experience, newExperience] 
    }));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = { ...skill, id: Date.now().toString() };
    setProfile(prev => ({ 
      ...prev, 
      skills: [...prev.skills, newSkill] 
    }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    setProfile(prev => ({ 
      ...prev, 
      projects: [...prev.projects, newProject] 
    }));
  };

  const addCertificate = (certificate: Omit<Certificate, 'id'>) => {
    const newCertificate = { ...certificate, id: Date.now().toString() };
    setProfile(prev => ({ 
      ...prev, 
      certificates: [...prev.certificates, newCertificate] 
    }));
  };

  return (
    <ProfileContext.Provider value={{
      profile,
      updateProfile,
      addExperience,
      addSkill,
      addProject,
      addCertificate,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};