import {
  faEraser,
  faPenToSquare,
} from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteTicket } from '@/futures/actions/delete-ticket';
import { ticketPath } from '@/path';
import type { Ticket } from '../types';
import TICKET_ICONS from './TicketIcons';

type IticketItemProps = {
  ticket: Ticket;
  isDetail: boolean;
};


const TicketItem = ({ ticket, isDetail }: IticketItemProps) => {

  const DeleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button
        variant="outline"
        type="submit"
        className="px-2 py-1 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-neutral-600 active:bg-gray-300 dark:active:bg-neutral-500 rounded-md"
      >
        <div className="flex gap-x-1 items-center">
          <FontAwesomeIcon icon={faEraser} className="w-4 h-4" />
          <div className="text-gray-600 dark:text-gray-300">Delete</div>
        </div>
      </Button>
    </form>
  );

  const DetailButton = (
    <Button asChild variant="outline" className="px-2 py-1hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-neutral-600 active:bg-gray-300 dark:active:bg-neutral-500 rounded-md">
          <Link prefetch={true} href={ticketPath(ticket.id)}>
          <div className="flex gap-x-1 items-center">
          <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4" />
          <div className="text-gray-600 dark:text-gray-300">Detail</div>
          </div>
      </Link>
    </Button>
  );

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
          <CardTitle className="flex-1 flex gap-x-2 justify-between">
            <div className="flex-1 flex gap-x-2 items-center flex-nowrap">
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
            </div>

            <div>{isDetail ? DeleteButton : DetailButton}</div>
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
    </div>
  );
};
export { TicketItem };
