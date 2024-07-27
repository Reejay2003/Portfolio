"use client";
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
    import { usePathname } from "next/navigation";
    import Link from "next/link";
    import {CiMenuFries} from 'react-icons/ci';

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


const MobileNav = () => {
    const pathname = usePathname();
    return (
      <Sheet>
          <SheetTrigger className="flex justify-center items-center">
              <CiMenuFries className="text-[32px] text-secondary"/>
          </SheetTrigger>
          <SheetContent className = "flex flex-col">
              <div className="mt-10 mb-200 text-center text-2xl">
                  <Link href="/">
                      <h1 className="text-4xl font-semibold">Reejay<span className="text-secondary">.</span></h1>
                  </Link>
              </div>
              <nav className=' flex flex-col mt-20 justify-center items-center gap-8'>
                  {navLinks.map((link, index) => {
                      return <Link href={link.path} key = {index} 
                      className={`${link.path === pathname && "text-secondary border-b-2 border-secondary" }
                      capitalize text-lg hover:text-secondary hover:text-[19px] transition-all`}>{link.title}</Link> 
                  })}
              </nav>
          </SheetContent>
      </Sheet>
    )
}

export default MobileNav