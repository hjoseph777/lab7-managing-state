'use client';

import React, { useState, useEffect } from 'react';
import { useCounter } from './CounterProvider';

export default function Controls() {
  const [mounted, setMounted] = useState(false);
  const { incrementCount, decrementCount, resetCount } = useCounter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="controls">Loading controls...</div>;
  }

  return (
    <div className="controls">
      <button onClick={decrementCount} className="bg-red-500 text-white hover:bg-red-600">-</button>
      <button onClick={resetCount} className="bg-gray-500 text-white hover:bg-gray-600">Reset</button>
      <button onClick={incrementCount} className="bg-green-500 text-white hover:bg-green-600">+</button>
    </div>
  );
}
