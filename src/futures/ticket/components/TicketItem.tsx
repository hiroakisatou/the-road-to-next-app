import { faPenToSquare } from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/path';
import type { Ticket } from '../types';
import TICKET_ICONS from './TicketIcons';

type IticketItemProps = {
  ticket: Ticket;
  isDetail: boolean;
};
type EditButtonProps = {
  ticket: Ticket;
};

const EditButton = ({ ticket }: EditButtonProps) => {
  return (
    <Button asChild>
      <Link href={ticketPath(ticket.id)}>
        <div className="flex gap-x-1 items-center hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-neutral-600 active:bg-gray-300 dark:active:bg-neutral-500 rounded-md p-2">
          <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4" />
          <span className="text-gray-600 dark:text-gray-300">Edit</span>
        </div>
      </Link>
    </Button>
  );
};

const TicketItem = ({ ticket, isDetail }: IticketItemProps) => {
  return (
    <div
      className={clsx('w-full flex gap-x-1', {
        'max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card
        key={ticket.id}
        className="flex-1 flex flex-col gap-y-2 bg-white dark:bg-neutral-700 border-gray-200 dark:border-neutral-600"
      >
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <div
              className="w-6 h-6"
              role="img"
              aria-label={`Status: ${ticket.status}`}
              data-testid="status-icon"
            >
              {TICKET_ICONS[ticket.status]}
            </div>
            <h2 className="text-2xl m-0 p-0 font-semibold dark:text-gray-100">
              {ticket.title}
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx(
              'text-gray-600 dark:text-gray-300 whitespace-break-spaces',
              {
                'line-clammp-3': !isDetail,
              },
            )}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>

      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">
          <EditButton ticket={ticket} />
        </div>
      )}
    </div>
  );
};
export { TicketItem };
