import {initialTickets, Ticket} from '@/data';
import { Separator } from '@/components/ui/separator';

type TicketPageProps = {
    params: Promise<{
      ticketId: string;
      }>;
};



export default async function TicketPage({ params }: TicketPageProps) {
    const { ticketId } = await params;
    const ticket = ticketId && initialTickets.find(
      (ticket:Ticket) => ticket.id === ticketId);

    if (!ticket) {
      return (
        <div className="text-2xl font-bold">Ticket not found</div>
      );
    }
    return (
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">TicketPage</h2>
        <Separator className="border-b border-slate-300" />
        <div>
          <h3 className="text-2xl font-semibold">{ticket.title}</h3>
          <p>{ticket.content}</p>
        </div>
      </div>
    );

};
