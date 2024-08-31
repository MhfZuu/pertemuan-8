'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    href: '/',
    tag: 'Home',
  },
  {
    href: '/blog',
    tag: 'Blog',
  },
  {
    href: '/dashboard',
    tag: 'Dashboard',
  },
  {
    href: '/contact',
    tag: 'Contact',
  },
  {
    href: '/about',
    tag: 'About',
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex sticky top-0 w-full h-16 bg-white text-black font-bold z-10 justify-between items-center px-8">
      <div className="w-fit">
        <p className="text-3xl">Test.</p>
      </div>
      <div className="w-fit flex gap-4">
        {links.map((link) => {
          const key = link.href.slice(1);
          return (
            <Link
              href={link.href}
              style={
                pathName == link.href || (pathName.includes(key) && key != '')
                  ? { textDecorationLine: 'underline' }
                  : {}
              }
            >
              {link.tag}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
