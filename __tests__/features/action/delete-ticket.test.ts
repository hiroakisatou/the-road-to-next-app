import { deleteTicket } from "@/futures/actions/delete-ticket";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('deleteTicket', () => {

  let testTicketId: string;

  beforeEach(async () => {
    const testTicket = await prisma.ticket.create({
      data: {
        title: 'Test Ticket',
        content: 'This is a test ticket',
        status: 'OPEN' as const,
      },
    });
  testTicketId = testTicket.id;
  });

  afterAll(async () => {
    try {
      await prisma.ticket.delete({
        where: {
          id: testTicketId,
        },
      });
    } catch (error) {
      console.error('Error deleting test ticket:', error);
    }
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('should delete ticket and redirect', async () => {
      await deleteTicket(testTicketId);

      const deletedTicket = await prisma.ticket.findUnique({
        where: {
          id: testTicketId,
        },
      });

      expect(deletedTicket).toBeNull();

      expect(redirect).toHaveBeenCalledWith('/tickets');
    });

    it ('should handle delete error for non-existent ticket', async () => {
      const nonExistentTicketId = 'non-existent-ticket-id';

      await expect(deleteTicket(nonExistentTicketId)).rejects.toThrow();
      expect(redirect).not.toHaveBeenCalled();
  });
});

