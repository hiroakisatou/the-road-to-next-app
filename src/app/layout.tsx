import type { Metadata } from 'next';

import './globals.css';

import localFont from 'next/font/local';

import type React from 'react';
import Header from '@/components/Header';
import ThemeProvider from '@/components/theme/theme-provider';

const inter = localFont({
  src: '../fonts/Inter-VariableFont_opsz,wght.ttf',
});

export const metadata: Metadata = {
  title: 'ticket-app',
  description: 'My Load to Next Application...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main
            className="
         text-gray-950 dark:text-gray-100
          flex-1
          overflow-y-auto overflow-x-hidden
          py-24 px-8
          bg-gray-100 dark:bg-neutral-800 flex flex-col"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
