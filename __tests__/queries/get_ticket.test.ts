import { getTicket } from '@/futures/queries/get-ticket';
import { prisma } from '@/lib/prisma';

let ticketId: string;

beforeEach(async () => {
  const firstTicket = await prisma.ticket.findFirst();
  ticketId = firstTicket?.id ?? '';
});

describe('getTicket', () => {
  it('should return a ticket when found', async () => {
    const ticket = await getTicket(ticketId);
    expect(ticket).toBeDefined();
    expect(ticket?.id).toBe(ticketId);
  });

  it('should return null when not found', async () => {
    const ticket = await getTicket('nonexistent-id');
    expect(ticket).toBeNull();
  });
});

