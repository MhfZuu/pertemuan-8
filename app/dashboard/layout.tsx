'use client';

import Sidebar from '@/app/_components/dashboardSidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative">
      <Sidebar />
      {children}
    </div>
  );
}
