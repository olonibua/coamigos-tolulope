import React, { createContext, useContext, useState } from 'react';

interface DummyUser {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: DummyUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<DummyUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      // Simulate loading delay
      await new Promise<void>(resolve => setTimeout(() => resolve(), 1500));

      // Dummy validation - accept any email/password
      if (email.includes('@') && password.length > 0) {
        const dummyUser: DummyUser = {
          id: Math.random().toString(36).substr(2, 9),
          email: email,
          name: email.split('@')[0], // Use email prefix as name
        };
        setUser(dummyUser);
      } else {
        setError('Please enter valid credentials');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Sign in error:', err);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setError(null);
      setLoading(true);

      // Simulate loading delay
      await new Promise<void>(resolve => setTimeout(() => resolve(), 1500));

      // Dummy validation - accept any valid inputs
      if (email.includes('@') && password.length > 0 && name.length > 0) {
        const dummyUser: DummyUser = {
          id: Math.random().toString(36).substr(2, 9),
          email: email,
          name: name,
        };
        setUser(dummyUser);
      } else {
        setError('Please fill in all fields correctly');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Sign up error:', err);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      setLoading(true);

      await new Promise<void>(resolve => setTimeout(() => resolve(), 500));

      setUser(null);
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Sign out error:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
