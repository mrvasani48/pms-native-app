import React, { createContext, useState, useContext, ReactNode } from 'react';
import { login, getProfile, getTimeEntry } from '../services/api';

interface AuthContextType {
  user: any;
  loading: boolean;
  error: string | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const loginData = await login(username, password);
      console.log(loginData)
      const profileData = await getProfile(loginData.access);
      const timeEntry = await getTimeEntry(loginData.access);

      setUser({ ...loginData, ...profileData,...timeEntry });
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

