// Project: state-management-lab
'use client';

import { useEffect, useState } from 'react';
import { Inter as Sans, Roboto_Mono as Mono } from 'next/font/google';
import "../styles/globals.css";  // Corrected import path

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
 children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Always return the required tags, never null
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <title>State Management Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${sans.variable} ${mono.variable} antialiased`} suppressHydrationWarning>
        {isClient ? (
          children
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p>Loading application...</p>
          </div>
        )}
      </body>
    </html>
  );
}
