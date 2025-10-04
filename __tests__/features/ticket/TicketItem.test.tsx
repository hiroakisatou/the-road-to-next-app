import { TicketItem } from "@/futures/ticket/components/TicketItem";
import { render, screen, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ticketsPath } from "@/path";
import TicketsPage from "@/app/tickets/page";
import TicketList from "@/futures/ticket/components/tiicket-list";

const mockTicket = {
  id: '1',
  title: 'Ticket 1',
  content: 'This is the first ticket',
  status: 'DONE' as const,
};

describe('TicketItem', () => {
  it('should render the ticket title', () => {
    render(<TicketItem ticket={mockTicket} isDetail={false} />);
    expect(screen.getByText('Ticket 1')).toBeInTheDocument();
  });

  it('should render the ticket content', () => {
    render(<TicketItem ticket={mockTicket} isDetail={false} />);
    expect(screen.getByText('This is the first ticket')).toBeInTheDocument();
  });

  it('should have accessible status indicator', () => {
    render(<TicketItem ticket={mockTicket} isDetail={false} />);

    // スクリーンリーダーがステータスを読み上げられるかテスト
    const statusIcon = screen.getByTestId('status-icon');
    expect(statusIcon).toHaveAttribute('aria-label', 'Status: DONE');
    expect(statusIcon).toHaveAttribute('role', 'img');
  });

  it('should have accessible detail button in tickets page', () => {
    render(<TicketItem ticket={mockTicket} isDetail={false} />);
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });

  it('should have accessible delete button in tickets page', () => {
    render(<TicketItem ticket={mockTicket} isDetail={true} />);
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('shoud render delete form with correct action', () => {
    render(<TicketItem ticket={mockTicket} isDetail={true} />);

    const deleteButton = screen.getByText('Delete');
    const form = deleteButton.closest('form');

    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute('action');
  });

  it('should have delete button with correct type', () => {
    render(<TicketItem ticket={mockTicket} isDetail={true} />);

    const deleteButton = screen.getByText('Delete');
    expect(deleteButton.closest('button')).toHaveAttribute('type', 'submit');
  });
});