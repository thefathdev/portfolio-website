import NavLink from './navLink';
import Button from './button';

export default function MobileMenu({open}: {open: boolean}) {
  return (
    <div
      className={`absolute md:hidden top-0 right-0 w-2/3 bg-blue-600  min-h-screen ${
        !open && 'translate-x-full'
      } transition-transform z-40`}
    >
      <nav className="flex flex-col gap-9 font-medium text-white items-center pt-20">
        <NavLink type="light" href="#about">
          About
        </NavLink>
        <NavLink type="light" href="#projects">
          Projects
        </NavLink>
        <NavLink type="light" href="#contact">
          Contact
        </NavLink>
        <Button size="small" type="light" href="#resume">
          Resume
        </Button>
      </nav>
    </div>
  );
}
