'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserWithPassword extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('Failed to parse user from localStorage', err);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // Signup function
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate API

    if (!name || !email || !password) throw new Error('All fields are required');

    // Load existing users
    const usersStr = localStorage.getItem('users');
    const users: UserWithPassword[] = usersStr ? JSON.parse(usersStr) : [];

    if (users.find(u => u.email === email)) {
      setIsLoading(false);
      throw new Error('Email already registered');
    }

    const newUser: UserWithPassword = {
      id: Date.now().toString(),
      name,
      email,
      password, // in real apps, hash passwords!
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Set current user
    const currentUser = { id: newUser.id, name: newUser.name, email: newUser.email };
    setUser(currentUser);
    localStorage.setItem('user', JSON.stringify(currentUser));
    setIsLoading(false);
  };

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate API

    if (!email || !password) {
      setIsLoading(false);
      throw new Error('Email and password are required');
    }

    const usersStr = localStorage.getItem('users');
    const users: UserWithPassword[] = usersStr ? JSON.parse(usersStr) : [];

    const found = users.find(u => u.email === email && u.password === password);

    if (!found) {
      setIsLoading(false);
      throw new Error('Invalid email or password');
    }

    const currentUser = { id: found.id, name: found.name, email: found.email };
    setUser(currentUser);
    localStorage.setItem('user', JSON.stringify(currentUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
