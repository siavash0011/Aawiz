'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, LogOut, LogIn } from 'lucide-react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            <Link href={isAuthenticated ? "/dashboard" : "/"} className="text-xl font-bold">
              Aawiz
            </Link>

            {/* SHOW LINKS ON ALL SCREEN SIZES */}
            <div className="flex gap-4 text-sm">
              {!isAuthenticated ? (
                <Link href="/" className="font-medium transition-colors hover:text-primary">
                  Home
                </Link>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Profile
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {isAuthenticated && user && (
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Welcome, {user.name}
              </span>
            )}

            {/* THEME TOGGLE */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* LOGIN / LOGOUT */}
            {isAuthenticated ? (
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
