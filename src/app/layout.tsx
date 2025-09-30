import {homePath, ticketsPath} from '@/path';
import type {Metadata} from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { Button } from '@/components/ui/button';

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
        <nav
          className="
        bg-slate-100/60
          fixed left-0 right-o top-0 z-20
          border-b border-slate-400/95
          w-full flex py-2.5 px-5 justify-between"
        >
          <Link
            href={homePath}
            className="text-4xl text-slate-900 font-bold flex items-center gap-4"
          >
            <FontAwesomeIcon
              icon={faListCheck}
              className="w-10 h-10 border-2 rounded-md p-1"
            />
            <p>Awsome Tickets</p>
          </Link>
          <Button asChild variant="default" className="bg-yellow-500">
            <Link className="text-slate-700" href={ticketsPath}>
              Tickets
            </Link>
          </Button>
        </nav>
        <main
          className="
         text-slate-950
          min-h-screen flex-1
          overflow-y-auto overflow-x-hidden
          py-24 px-8
          bg-slate-200  flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
