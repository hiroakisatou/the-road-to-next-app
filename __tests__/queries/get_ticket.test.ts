import { getTicket } from '@/futures/queries/get-ticket';

const ticketId = 'cmg9sxq2b0000m0mfmendzt5e';

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

