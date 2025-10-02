import Link from 'next/link';
import { PlaceHolder } from '@/components/PlaceHolder';
import { Button } from '@/components/ui/button';
import { TicketItem } from '@/futures/ticket/components/TicketItem';
import type { Ticket } from '@/futures/ticket/types';
import { getTicket } from '../queries/get-ticket';

const TicketDescription = async ({ ticketId }: { ticketId: string }) => {
  const ticket: Ticket | null = await getTicket(ticketId);
  if (!ticket) {
    return (
      <PlaceHolder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href="/tickets">Go to tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div className="w-full flex flex-col items-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
};
export { TicketDescription };
