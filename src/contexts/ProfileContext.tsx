import React, { createContext, useContext, useState, ReactNode } from 'react';

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

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
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