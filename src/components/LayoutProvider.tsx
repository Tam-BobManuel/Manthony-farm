import { createContext, useState } from 'react';

interface LayoutContextType {
  // Define the shape of your context here
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <LayoutContext.Provider value={{ theme, setTheme }}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, LayoutContext };