import {PropsWithChildren} from 'react';

type ButtonProps = PropsWithChildren<{}> & {
  size?: 'large' | 'small';
  type?: 'light' | 'dark';
  href: string;
};

export default function Button({size = 'large', type = 'dark', href, children}: ButtonProps) {
  return (
    <a
      href={href}
      className={`text-base sm:text-lg ${
        type === 'dark'
          ? ' text-blue-600 border-blue-600 hover:bg-blue-600/10 drop-shadow-[0_35px_35px_rgba(37,99,235,0.5)]'
          : 'text-white border-white hover:bg-white/10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]'
      }  font-bold ${
        size === 'large' ? 'py-3.5 px-7 sm:text-xl sm:py-4 sm:px-8' : 'py-2 px-5 sm:text-lg'
      }  border-solid border-2  rounded-xl 
     transition-colors`}
    >
      {children}
    </a>
  );
}
