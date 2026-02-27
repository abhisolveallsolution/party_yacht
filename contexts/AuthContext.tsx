"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
interface AuthContextType {
  // user: User | null;
  // session: Session | null;
  // profile: Profile | null;
  // role: AppRole | null;
  loading: { spinner: string };
  // signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  // signUp: (email: string, password: string, fullName: string, role: AppRole) => Promise<{ error: Error | null }>;
  // signOut: () => Promise<void>;
  // refreshProfile: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [role, setRole] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState({
    spinner: "loading..."
  });
  // const signUp = async (email: string, password: string, fullName: string, role: AppRole) => {
  //   const redirectUrl = `${window.location.origin}/`;

  // const { error } = await supabase.auth.signUp({
  //   email,
  //   password,
  //   options: {
  //     emailRedirectTo: redirectUrl,
  //     data: {
  //       full_name: fullName,
  //       role: role,
  //     },
  //   },
  // });
  // return { error };
  // };
  return (
    <AuthContext.Provider
      value={{
        // user,
        // session,
        // profile,
        // role,
        loading,
        // signIn,
        // signUp,
        // signOut,
        // refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}