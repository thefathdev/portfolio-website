import {PropsWithChildren} from 'react';

export default function NavLink({
  children,
  href,
  type = 'dark',
}: PropsWithChildren<{href: string; type?: 'light' | 'dark'}>) {
  return (
    <div className="group">
      <a
        href={href}
        className={`text-base sm:text-lg ${
          type === 'dark' ? 'group-hover:text-blue-600' : 'group-hover:text-white'
        }`}
      >
        {children}
      </a>
      <div
        className={`w-full h-[2px] ${
          type === 'dark' ? 'bg-blue-600' : 'bg-white'
        } scale-x-0 -translate-x-1/2 group-hover:scale-x-100  group-hover:translate-x-0 transition-transform`}
      ></div>
    </div>
  );
}
