import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const tickets = [
  {
    title: 'Ticket 1',
    content: 'This is the first ticket from the database',
    status: 'DONE' as const,
    deadline: new Date().toISOString().split('T')[0],
    boundly: 499,
  },
  {
    title: 'Ticket 2',
    content: 'This is the second ticket from the database',
    status: 'OPEN' as const,
    deadline: new Date().toISOString().split('T')[0],
    boundly: 399,
  },
  {
    title: 'Ticket 3',
    content: 'This is the third ticket from the database',
    status: 'IN_PROGRESS' as const,
    deadline: new Date().toISOString().split('T')[0],
    boundly: 599,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Startefd ...');
  await prisma.ticket.deleteMany();

  const promises = tickets.sort((a, b) => a.title.localeCompare(b.title)).map((ticket) =>
    prisma.ticket.create({
      data: ticket,
    })
  );

  await Promise.all(promises);
  const t1 = performance.now();
  console.log(`DB Seed: Completed in ${t1 - t0} ms`);
};

seed();