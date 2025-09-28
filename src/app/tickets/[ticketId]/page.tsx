type TicketPageProps = {
    params: Promise<{
      ticketId: string;
      }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
    const { ticketId } = await params;

    return (
        <div className="prose">
        <h2>TicketPage: {ticketId}</h2>
        </div>
        );

};
