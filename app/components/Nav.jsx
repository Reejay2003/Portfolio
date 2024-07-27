"use client";
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        title: "Home",
        path: "/",
      },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-primary bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-1 mt-[-2px] cursor-pointer'>
        <Link href={"/"} className='text-4xl ml-5'>Reejay <span className='text-secondary text-6xl'>.</span></Link>  
        <div className='hidden lg:block'>
          <ul className='flex flex-row gap-16 text-lg pr-10'>
            {navLinks.map((list, index) => (
              <li key={index}>
                <Link href={list.path}
                  className={`
                    capitalize text-lg 
                    ${list.path === pathname ? 'text-secondary border-b-2 border-secondary' : 'text-white'}
                    hover:text-secondary hover:text-[19px]
                  `}>
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:hidden'><MobileNav /></div>
      </div>
    </nav>
  );
}

export default Nav;
