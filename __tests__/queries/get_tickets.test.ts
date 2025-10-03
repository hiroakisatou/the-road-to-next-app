import { getTickets } from "@/futures/queries/get-tickets";

describe('getTickets', () => {
  it('should return a list of tickets', async () => {
    const tickets = await getTickets();
    expect(tickets).toBeDefined();
    expect(tickets?.length).toBeGreaterThanOrEqual(0);
  });
});