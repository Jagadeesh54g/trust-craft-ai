import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { supabase, hasSupabase } from "@/lib/supabase";

type UserRole = "user" | "recruiter" | "admin";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  oauthSignIn: (provider: 'google' | 'github' | 'linkedin') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "credify.auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setUser(parsed.user ?? null);
        setToken(parsed.token ?? null);
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ user, token })
    );
  }, [user, token]);

  useEffect(() => {
    if (!hasSupabase) return;
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setToken(session.access_token ?? null);
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || session.user.email?.split("@")[0] || "",
          email: session.user.email || "",
          role: "user",
        });
      } else {
        setToken(null);
        setUser(null);
      }
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    if (!hasSupabase) throw new Error("Supabase not configured");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    const session = data.session;
    if (session?.user) {
      setToken(session.access_token ?? null);
      setUser({
        id: session.user.id,
        name: session.user.user_metadata?.name || session.user.email?.split("@")[0] || "",
        email: session.user.email || "",
        role: "user",
      });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    if (!hasSupabase) throw new Error("Supabase not configured");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });
    if (error) throw new Error(error.message);
    const session = data.session;
    if (session?.user) {
      setToken(session.access_token ?? null);
      setUser({ id: session.user.id, name, email, role: "user" });
    }
  };

  const oauthSignIn = async (provider: 'google' | 'github' | 'linkedin') => {
    if (!hasSupabase) throw new Error("Supabase not configured");
    const mapped = provider === 'linkedin' ? 'linkedin_oidc' : provider;
    const { error } = await supabase.auth.signInWithOAuth({
      // @ts-expect-error - provider mapping
      provider: mapped,
      options: {
        redirectTo: `${window.location.origin}/feed`,
      }
    });
    if (error) throw new Error(error.message);
  };

  const logout = async () => {
    if (hasSupabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    setToken(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value = useMemo<AuthContextType>(
    () => ({ user, token, isAuthenticated: Boolean(user), login, register, oauthSignIn, logout }),
    [user, token]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};




