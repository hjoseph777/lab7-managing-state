'use client';

import React, { useState, useEffect } from 'react';
import DisplayCount from './DisplayCount';
import Controls from './Controls';

export default function Counter() {
  const [mounted, setMounted] = useState(false);
  // No need to call useCounter here - it's already used in the child components
  // This simplifies the component and avoids unnecessary context consumption

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="counter">Loading counter...</div>;
  }

  return (
    <div className="counter">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <DisplayCount />
      <Controls />
    </div>
  );
}
