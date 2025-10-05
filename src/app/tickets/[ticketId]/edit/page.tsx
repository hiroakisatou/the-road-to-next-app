import { notFound } from 'next/navigation';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/Heading';
import { getTicket } from '@/futures/queries/get-ticket';
import { TicketUpdateForm } from '@/futures/ticket/components/ticket-update-form';
import type { Ticket } from '@/futures/ticket/types';

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketEditPage({ params }: TicketEditPageProps) {
  const { ticketId } = await params;
  const ticket: Ticket | null = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Heading
        title="Ticket Edit Page"
        description="You could edit the ticket detail"
      />
      <CardCompact
        title="Edit Ticket"
        description="Edit an existing ticket"
        className="w-full max-w-[420px] md:max-w-[580px] animate-fade-from-top bg-neutral-50 dark:bg-neutral-900 border-none gap-y-2"
        content={<TicketUpdateForm ticket={ticket} />}
      />
    </div>
  );
}
