import { Suspense } from 'react';
import { Heading } from '@/components/Heading';
import { Spinner } from '@/components/spiinner';
import TicketList from '@/futures/ticket/components/tiicket-list';

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketsPage;
