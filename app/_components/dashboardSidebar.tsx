import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const currPath = usePathname();
  return (
    <aside className="sticky h-[calc(100vh-4rem)] bg-gray-900 text-center left-0 top-16">
      <Link href="/dashboard/invoice">
        <div
          className={`${
            currPath == '/dashboard/invoice' ? 'bg-gray-700' : {}
          } p-6 space-y-6 hover:bg-gray-700`}
        >
          <p>Invoice</p>
        </div>
      </Link>
      <Link href="/dashboard/customers">
        <div
          className={`${
            currPath == '/dashboard/customers' ? 'bg-gray-700' : {}
          } p-6 space-y-6 hover:bg-gray-700`}
        >
          <p>Customers</p>
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;
