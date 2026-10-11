'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme';

function applyThemeClass(newTheme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (newTheme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }
  root.style.colorScheme = newTheme;
  root.setAttribute('data-theme', newTheme);
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('themechange', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('themechange', callback);
  };
}

function getSnapshot(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {}
  return 'dark';
}

function getServerSnapshot(): Theme {
  return 'dark';
}

function getMountedSnapshot(): boolean {
  return true;
}

function getServerMountedSnapshot(): boolean {
  return false;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(subscribe, getMountedSnapshot, getServerMountedSnapshot);

  // Synchronize DOM with the active theme
  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (e) {
      console.error('Failed to save theme to localStorage:', e);
    }
    applyThemeClass(newTheme);
    window.dispatchEvent(new Event('themechange'));
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
