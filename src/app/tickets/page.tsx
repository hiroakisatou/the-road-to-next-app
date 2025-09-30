import {
  faCheck,
  faFile,
  faPencil,
} from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { Heading } from '@/components/Heading';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Ticket } from '@/data';
import { initialTickets } from '@/data';
import { ticketPath } from '@/path';

const TICKET_ICONS: Record<'OPEN' | 'IN_PROGRESS' | 'DONE', ReactElement> = {
  OPEN: <FontAwesomeIcon icon={faFile} />,
  IN_PROGRESS: <FontAwesomeIcon icon={faPencil} />,
  DONE: <FontAwesomeIcon icon={faCheck} />,
};

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket: Ticket) => (
          <Card
            key={ticket.id}
            className="w-full max-w-[420px] flex flex-col gap-y-2"
          >
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <div className="w-6 h-6">{TICKET_ICONS[ticket.status]}</div>
                <h2 className="text-2xl m-0 p-0 font-semibold">
                  {ticket.title}
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={clsx('tet-nomalL text-slate-600 truncate', {
                  'line-through': ticket.status === 'DONE',
                })}
              >
                {ticket.content}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={ticketPath(ticket.id)}
                className="text-normal underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
