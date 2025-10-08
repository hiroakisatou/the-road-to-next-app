import type { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';
import type React from 'react';
import Header from '@/components/Header';
import ThemeProvider from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
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
          <Toaster expand={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}
