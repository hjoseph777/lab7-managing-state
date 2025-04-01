'use client';

import React, { useState, useEffect } from 'react';
import { useCounter } from './CounterProvider';

export default function DisplayCount() {
  const [mounted, setMounted] = useState(false);
  const { count } = useCounter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="display-count">Loading count...</div>;
  }

  return (
    <div className="display-count">
      <h3 className="text-3xl font-bold">Count: {count}</h3>
    </div>
  );
}
