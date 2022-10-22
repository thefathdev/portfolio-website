import {PropsWithChildren} from 'react';
import EmailLink from './emailLink';
import Navbar from './navbar';
import SocialLink from './socialLink';

// TODO: Mobile first

export default function Layout({children}: PropsWithChildren<{}>) {
  return (
    <div className=" bg-white relative">
      {/* Overlay Component */}
      <div className="absolute z-50 min-h-screen w-screen pointer-events-none">
        <Navbar />
        <SocialLink />
        <EmailLink />
      </div>
      {/* Main Component */}
      <main>{children}</main>
    </div>
  );
}
