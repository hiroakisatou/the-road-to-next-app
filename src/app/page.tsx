import Link from 'next/link';
import { Heading } from '@/components/Heading';
import { ticketsPath } from '@/path';

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Heading title="HomePage" description="Your home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath} className="underline underline-offset-2">
          Tickets
        </Link>
      </div>
    </div>
  );
}
