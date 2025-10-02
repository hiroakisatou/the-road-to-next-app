import { getTickets } from '@/futures/queries/get-tickets';
import type { Ticket } from '@/futures/ticket/types';
import { TicketItem } from './TicketItem';

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="w-full flex flex-col items-center gap-y-4 animate-fade-from-top">
      {tickets.map((ticket: Ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} isDetail={false} />
      ))}
    </div>
  );
};

export default TicketList;
