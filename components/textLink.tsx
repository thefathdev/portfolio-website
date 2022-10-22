import {PropsWithChildren} from 'react';

export default function TextLink({children, href}: PropsWithChildren<{href: string}>) {
  return (
    <span className="group relative">
      <a href={href} target="_blank" className="text-blue-600 font-bold">
        {children}
      </a>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600  scale-x-0 -translate-x-1/2 group-hover:scale-x-100  group-hover:translate-x-0 transition-transform"></div>
    </span>
  );
}
