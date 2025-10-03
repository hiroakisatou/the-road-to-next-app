import { prisma } from '@/lib/prisma';
import type { Ticket } from '../ticket/types';

export const getTicket = async (id: string): Promise<Ticket | null> => {
  return await prisma.ticket.findUnique({
    where: {
      id,
    },
  });
};
