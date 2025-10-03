import { notFound } from 'next/navigation';
import { Heading } from '@/components/Heading';
import { getTicket } from '@/futures/queries/get-ticket';
import { TicketItem } from '@/futures/ticket/components/TicketItem';
import type { Ticket } from '@/futures/ticket/types';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket: Ticket | null = await getTicket(ticketId);
  if (!ticket) {
    notFound();
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
