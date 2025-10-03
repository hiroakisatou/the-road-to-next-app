import  Link  from 'next/link';
import { PlaceHolder } from '@/components/PlaceHolder';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2" suppressHydrationWarning>
    <PlaceHolder
      label="Ticket not found"
      button={
        <Button asChild variant="outline">
          <Link href="/tickets">Go to tickets</Link>
        </Button>
  }
    />
    </div>
  );
}
