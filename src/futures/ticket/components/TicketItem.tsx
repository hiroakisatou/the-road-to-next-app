import {
  faCircleInfo,
  faEraser,
  faMoneyCheckPen,
} from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { deleteTicket } from '@/futures/actions/delete-ticket';
import { ticketPath, updateTicketPath } from '@/path';
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

  const EditButton = (
    <Button
      asChild
      variant="outline"
      className="px-2 py-1 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:active:bg-yellow-700 text-neutral-900 dark:text-neutral-900 rounded-md"
    >
      <Link prefetch={true} href={updateTicketPath(ticket.id)}>
        <div className="flex gap-x-1 items-center">
          <FontAwesomeIcon icon={faMoneyCheckPen} className="w-4 h-4" />
          <div className="text-gray-900 dark:text-gray-50">Edit</div>
        </div>
      </Link>
    </Button>
  );

  const DetailButton = (
    <Button
      asChild
      variant="outline"
      className="px-2 py-1 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900/50 active:bg-gray-200 dark:active:bg-gray-900/10 rounded-md"
    >
      <Link prefetch={true} href={ticketPath(ticket.id)}>
        <div className="flex gap-x-1 items-center">
          <FontAwesomeIcon icon={faCircleInfo} className="w-4 h-4" />
          <div className="text-gray-900 dark:text-gray-50">Detail</div>
        </div>
      </Link>
    </Button>
  );

  return (
    <div className="w-full flex gap-x-1 max-w-[420px] md:max-w-[580px]">
      <Card
        key={ticket.id}
        className="flex-1 flex flex-col gap-y-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
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

      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {EditButton}
            {DeleteButton}
          </>
        ) : (
          <>
            {DetailButton}
            {EditButton}
          </>
        )}
      </div>
    </div>
  );
};
export { TicketItem };
