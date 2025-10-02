import { Suspense } from 'react';
import { Heading } from '@/components/Heading';
import { Spinner } from '@/components/spiinner';
import { TicketDescription } from '@/futures/ticket/ticket-description';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  return (
    <div className="flex flex-col gap-3">
      <Heading
        title="Ticket Page"
        description="Information about each ticket"
      />
      <Suspense fallback={<Spinner />}>
        <TicketDescription ticketId={ticketId} />
      </Suspense>
    </div>
  );
}
