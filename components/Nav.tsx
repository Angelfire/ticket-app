import Link from "next/link";

import { Home, Ticket } from "lucide-react";

const Nav = () => {
  return (
    <nav className="flex justify-between p-4 border-b border-b-slate-200 dark:border-t-slate-700">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Home className="h-6 w-6" />
        </Link>
        <Link href="/ticketspage/new">
          <Ticket className="h-6 w-6" />
        </Link>
      </div>
      <div>
        <p>email@email.com</p>
      </div>
    </nav>
  );
};

export default Nav;
