import Link from 'next/link';
import {useState} from 'react';
import Button from './button';
import MobileMenu from './mobileMenu';
import NavLink from './navLink';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="fixed w-full backdrop-blur bg-white/40 px-6 lg:px-20 py-5 flex justify-between items-center pointer-events-auto">
        <a href="#home" className="group text-gray-900 text-2xl sm:text-3xl font-bold">
          {'<'}
          <span className="inline-block opacity-0 -translate-x-2/4 group-hover:opacity-100 group-hover:-translate-x-0 transition">
            Fath{' '}
          </span>
          <span className="inline-block -translate-x-12 group-hover:translate-x-2 transition-transform">
            {'/>'}
          </span>
        </a>
        <nav className="hidden md:flex gap-9 font-medium text-gray-500 items-center pointer-events-auto">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button size="small" href="#resume">
            Resume
          </Button>
        </nav>
        <div
          tabIndex={0}
          className="flex flex-col gap-2 md:hidden items-end z-50 cursor-pointer pointer-events-auto"
          onClick={() => setOpenMenu(!openMenu)}
          onKeyUp={e => {
            if (e.code === 'Enter') {
              setOpenMenu(!openMenu);
            }
          }}
        >
          <div
            aria-hidden
            className={`w-10 h-[3px] ${
              !openMenu ? 'bg-blue-600' : 'bg-white rotate-45 translate-y-3'
            } transition duration-200`}
          ></div>
          <div
            aria-hidden
            className={`w-9 h-[3px] ${
              !openMenu ? 'bg-blue-600' : 'bg-white opacity-0 -translate-x-16'
            }  transition duration-300`}
          ></div>
          <div
            aria-hidden
            className={`h-[3px] ${
              !openMenu ? 'bg-blue-600 w-8' : 'bg-white -rotate-45 w-10 -translate-y-2.5'
            }  transition duration-200`}
          ></div>
          <span className="sr-only">open mobile menu</span>
        </div>
        <MobileMenu open={openMenu} />
      </header>
    </>
  );
}
