import { useState } from 'react';
import { login, getProfile } from '../services/api';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const loginData = await login(username, password);
      const profileData = await getProfile(loginData.token);
      setUser({ ...loginData, ...profileData });
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, loading, error, signIn, signOut };
};

