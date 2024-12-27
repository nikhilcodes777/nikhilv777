import React from 'react'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiLinkedin, SiSpotify } from '@icons-pack/react-simple-icons';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteName } from '@/config';
const NavBar = () => {
  return (
    <nav className="sticky z-40 top-3 bg-background/60 backdrop-blur flex h-16 items-center justify-between  border-2 border-foreground rounded-xl my-3 mx-10  px-3">
      <div className="font-extrabold text-xl hover:scale-110 transition-all">
        <Link href="/">{siteName}</Link>

      </div>
      <ul className="hidden md:flex items-center gap-4 cursor-pointer font-semibold">
        <li className="hover:scale-110">
          <Link href="/blogs">
            Blogs
          </Link>
        </li>

        <li className="hover:scale-110">
          <Link href="/aboutme">
            About Me
          </Link>
        </li>


      </ul>

      <div className="hidden md:flex items-center justify-between gap-3">
        <Link href="/instagram">
          <SiInstagram className="hover:scale-110" />
        </Link>

        <Link href="/spotify">
          <SiSpotify className="hover:scale-110" />
        </Link>
        <Link href="/github">
          <SiGithub className="hover:scale-110" />
        </Link>

        <Link href="/linkedin">
          <SiLinkedin className="hover:scale-110" />
        </Link>
        <ModeToggle />

      </div>
      <div
        className="md:hidden flex"
      >
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>{siteName}</SheetTitle>

              <div className="flex justify-between">

                <ul className="text-xl flex flex-col items-center gap-4 cursor-pointer font-semibold">
                  <li className="hover:scale-110">
                    <Link href="/blogs">
                      Blogs
                    </Link>
                  </li>

                  <li className="hover:scale-110">
                    <Link href="/aboutme">
                      About Me
                    </Link>
                  </li>


                </ul>
                <div className="flex flex-col items-center justify-between gap-3">
                  <Link href="/instagram">
                    <SiInstagram className="hover:scale-110" />
                  </Link>
                  <Link href="/spotify">
                    <SiSpotify className="hover:scale-110" />
                  </Link>
                  <Link href="/github">
                    <SiGithub className="hover:scale-110" />
                  </Link>

                  <Link href="/linkedin">
                    <SiLinkedin className="hover:scale-110" />
                  </Link>
                  <ModeToggle />
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default NavBar
