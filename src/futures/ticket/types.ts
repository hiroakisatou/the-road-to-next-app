export type TicketState = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: TicketState;
}
