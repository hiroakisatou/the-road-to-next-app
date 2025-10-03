'use client';
import Link from 'next/link';
import { PlaceHolder } from '@/components/PlaceHolder';
import { Button } from '@/components/ui/button';

export default function TicketError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      className="flex-1 self-center flex flex-col items-center justify-center gap-y-2"
      suppressHydrationWarning
    >
      <PlaceHolder
        label={error.message || 'Something went wrong'}
        button={
          <div className="flex gap-2">
            <Button onClick={reset} variant="outline">
              Try again
            </Button>
            <Button asChild variant="outline">
              <Link href="/tickets">Go to tickets</Link>
            </Button>
          </div>
        }
      />
    </div>
  );
}
