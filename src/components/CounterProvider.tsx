'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CounterContextType {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const decrementCount = () => {
    setCount(prev => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  // Show nothing until mounted to prevent hydration errors
  if (!mounted) {
    return null;
  }

  return (
    <CounterContext.Provider value={{ count, incrementCount, decrementCount, resetCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
