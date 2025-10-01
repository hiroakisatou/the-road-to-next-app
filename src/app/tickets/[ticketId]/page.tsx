import Link from 'next/link';
import { Heading } from '@/components/Heading';
import PlaceHolder from '@/components/PlaceHolder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import TicketItem from '@/futures/ticket/components/TicketItem';
import type { Ticket } from '@/futures/ticket/types';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket =
    ticketId && initialTickets.find((ticket: Ticket) => ticket.id === ticketId);

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
    <div className="flex flex-col gap-3">
      <Heading
        title="Ticket Page"
        description="Information about each ticket"
      />
      <div className="w-full flex flex-col items-center animate-fade-from-top">
        <TicketItem ticket={ticket} isDetail={true} />
      </div>
    </div>
  );
}
