import { Suspense } from 'react';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/Heading';
import { Spinner } from '@/components/spiinner';
import { TicketCreateForm } from '@/futures/ticket/components/ticket-create-form';
import TicketList from '@/futures/ticket/components/tiicket-list';

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[580px] self-center bg-neutral-50 dark:bg-neutral-900 border-none gap-y-2"
        content={<TicketCreateForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketsPage;
