"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currPath = usePathname();
  return (
    <div className='flex w-screen h-screen'>
      <div className='fixed h-full bg-gray-900 text-center '>
        <Link href='/dashboard/invoice'>
          <div
            className={`${
              currPath == "/dashboard/invoice" ? "bg-gray-700" : {}
            } p-6 space-y-6 hover:bg-gray-700`}
          >
            <p>Invoice</p>
          </div>
        </Link>
        <Link href='/dashboard/customers'>
          <div
            className={`${
              currPath == "/dashboard/customers" ? "bg-gray-700" : {}
            } p-6 space-y-6 hover:bg-gray-700`}
          >
            <p>Customers</p>
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
}
