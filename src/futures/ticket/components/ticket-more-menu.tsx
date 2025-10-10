import { faEraser } from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Ticket } from '../types';
import { TICKET_STATUS_LABELS } from './ticket-status';

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactNode;
};

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const dleteButton = (
    <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-900">
      <FontAwesomeIcon icon={faEraser} className="mr-2 w-4 h-4" />
      <div>Delete</div>
    </DropdownMenuItem>
  );

  const ticketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup value={ticket.status}>
      {Object.entries(TICKET_STATUS_LABELS).map(([status, label]) => {
        return (
          <DropdownMenuRadioItem
            key={status}
            value={status}
            className="hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            {label}
          </DropdownMenuRadioItem>
        );
      })}
    </DropdownMenuRadioGroup>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white dark:bg-gray-800 w-56"
        side="right"
      >
        {ticketStatusRadioGroupItems}
        <DropdownMenuSeparator />
        {dleteButton}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { TicketMoreMenu };
