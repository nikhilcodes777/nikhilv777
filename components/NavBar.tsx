import React from 'react'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'
import { SiGithub, SiInstagram ,SiLinkedin} from '@icons-pack/react-simple-icons';
const NavBar = () => {
  return (
    <nav className="sticky z-40 top-0 bg-background/60 backdrop-blur flex h-16 items-center justify-between  border-2 border-foreground rounded-xl my-3 mx-10 px-3">
      <div className="font-extrabold text-xl hover:scale-110 transition-all">
        <Link href="/">Nikhilv777</Link>

      </div>
      <ul className="flex items-center gap-4 cursor-pointer font-semibold">
        <li className="hover:scale-110">
          <Link href="/blogs">
            Blogs
          </Link>
        </li>

        <li className="hover:scale-110">
          <Link href="/blogs">
            About Me
          </Link>
        </li>

        <li className="hover:scale-110">
          <Link href="/blogs">
            Socials
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-between gap-3">
        <SiInstagram className="hover:scale-110"></SiInstagram>
        <SiGithub className="hover:scale-110"></SiGithub>
        <SiLinkedin className="hover:scale-110"></SiLinkedin>
        <ModeToggle />

      </div>

    </nav>
  )
}

export default NavBar
