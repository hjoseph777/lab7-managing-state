'use client';

import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter';
import { CounterProvider } from '../components/CounterProvider';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return minimal content during hydration
  if (!mounted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js State Management</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </main>
  );
}
