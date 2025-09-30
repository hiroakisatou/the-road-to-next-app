import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';

import type React from 'react';
import Header from '@/components/Header';

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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main
          className="
         text-slate-950
          min-h-screen flex-1
          overflow-y-auto overflow-x-hidden
          py-24 px-8
          bg-slate-200 flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
