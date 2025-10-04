import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ticketsPath } from '@/path';

export const deleteTicket = async (id: string) => {
  'use server';

  const deletedTicket = await prisma.ticket.delete({
    where: { id },
  });

  if (!deletedTicket) {
    throw new Error('Ticket not found');
  }
  revalidatePath(ticketsPath);
  redirect(ticketsPath);
};
