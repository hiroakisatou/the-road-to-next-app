import { Heading } from '@/components/Heading';
import { initialTickets } from '@/data';
import TicketItem from '@/futures/ticket/components/TicketItem';
import type { Ticket } from '@/futures/ticket/types';

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <div className="w-full flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket: Ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} isDetail={false} />
        ))}
      </div>
    </div>
  );
}
