import Link from 'next/link';
import { Heading } from '@/components/Heading';
import PlaceHolder from '@/components/PlaceHolder';
import { Button } from '@/components/ui/button';
import { initialTickets, type Ticket } from '@/data';

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
      <div>
        <h3 className="text-2xl font-semibold">{ticket.title}</h3>
        <p>{ticket.content}</p>
      </div>
    </div>
  );
}
