'use client';

import { LucideMoon, LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export default function ThemeSwicher(): React.ReactNode {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="default"
      size="icon"
      className="bg-gray-100  hover:bg-gray-200 dark:bg-neutral-500 dark:hover:bg-neutral-600"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'light' ? (
        <LucideSun
          className="w-4 h-4 rotate-0 scale-100 transition-transform
           dark:rotate-90 dark:scale-0"
        />
      ) : (
        <LucideMoon
          className="w-4 h-4 rotate-90 scale-0 transition-transform
        dark:rotate-0 dark:scale-100"
        />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
