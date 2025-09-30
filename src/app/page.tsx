import {ticketsPath} from '@/path';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home Page</h1>
        <p className="text-nomal, text-muted-foreground">
          Your home pllace start
        </p>
      </div>
      <Separator className="border-b border-slate-300" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath} className="underline underline-offset-2">
          Tickets
        </Link>
      </div>
    </div>
  );
}
