import { Kanban } from 'lucide-react';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/path';
import ThemeSwicher from './theme/theme-swicher';
import { Button } from './ui/button';

const Header = () => {
  return (
    <nav
      className="
        bg-gray-50/80 dark:bg-neutral-700/90
          fixed left-0 right-o top-0 z-20
          border-b border-gray-300 dark:border-neutral-500/50
          w-full flex py-2.5 px-5 justify-between"
    >
      <div className="flex items-center gap-x-2">
      <Link
        href={homePath}
        className="text-[1.5rem] text-gray-900 dark:text-gray-100 font-bold flex items-center gap-4"
      >
        <Kanban />
        <p>TicketBoundary</p>
      </Link>
      </div>
      <div className="flex items-center gap-x-2">
      <ThemeSwicher />
      <Button asChild variant="default" className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:active:bg-yellow-700">
        <Link className="text-gray-800 dark:text-gray-900" href={ticketsPath}>
          Tickets
        </Link>
      </Button>
      </div>
    </nav>
  );
};
export default Header;
