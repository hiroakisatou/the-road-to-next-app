import Link from 'next/link';
import ReceptionIcon from '@/assets/icon/ReceptionIcon';
import { homePath, ticketsPath } from '@/path';
import { Button } from './ui/button';

const Header = () => {
  return (
    <nav
      className="
        bg-slate-100/60
          fixed left-0 right-o top-0 z-20
          border-b border-slate-400/95
          w-full flex py-2.5 px-5 justify-between"
    >
      <Link
        href={homePath}
        className="text-[1.5rem] text-slate-900 font-bold flex items-center gap-4"
      >
        <ReceptionIcon />
        <p>TicketBoundary</p>
      </Link>
      <Button asChild variant="default" className="bg-yellow-500">
        <Link className="text-slate-700" href={ticketsPath}>
          Tickets
        </Link>
      </Button>
    </nav>
  );
};
export default Header;
