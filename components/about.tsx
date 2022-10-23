import Image from 'next/image';
import TextLink from './textLink';
import profileSrc from '../public/images/profile.jpg';

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center  max-w-5xl mx-auto px-8 md:px-20 lg:px-24 xl:px-8 py-16"
    >
      <div className="flex gap-2 items-center mb-4 sm:mb-6">
        <div className="w-14 h-[2px] bg-gray-500 md:w-16"></div>
        <h2 className="text-gray-900 font-bold text-2xl sm:text-4xl lg:text-5xl">About Me</h2>
      </div>
      <div className="md:flex md:flex-row md:gap-9">
        <div className="flex flex-col ">
          <div className="mb-7 sm:mb-12">
            <div className="text-base  sm:text-xl font-medium text-gray-500 max-w-[54ch] mb-3 sm:mb-5">
              Hello! My name is <TextLink href="https://github.com/whatTheFath">Fathul</TextLink>{' '}
              and I enjoy developing things for the modern web. My interest in programming started
              back in 2021 when I decided to directly dive into web development instead of taking
              college.
            </div>
            <div className="text-base sm:text-xl font-medium text-gray-500 max-w-[54ch] mb-3 sm:mb-5">
              Moving forward, my main focus these days is building products with accesibility and
              responsiveness without setting aside performance.{' '}
              <TextLink href="mailto:abdillahfathu@gmail.com">
                I’m looking forward to a new opportunity
              </TextLink>{' '}
              while exploring the web.
            </div>
            <p className="text-base sm:text-xl font-medium text-gray-500 max-w-[54ch] mb-3 sm:mb-5">
              Technologies I’ve been working on:
            </p>
            <div className="flex gap-14 pl-6">
              <ul className="text-base sm:text-xl font-medium text-gray-500 list-disc">
                <li>JavaScript</li>
                <li>React</li>
                <li>Svelte</li>
                <li>Node.js</li>
                <li>Framer Motion</li>
              </ul>
              <ul className="text-base sm:text-xl font-medium text-gray-500 list-disc">
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Sass/Scss</li>
                <li>Express.js</li>
                <li>Tailwindcss</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group max-w-[180px] sm:max-w-xs mx-auto relative md:self-start">
          <div className="absolute top-0 right-0 w-full h-full border-solid border-gray-900 border-2 rounded-xl translate-x-3 translate-y-2.5 group-hover:translate-x-2 group-hover:translate-y-1.5 transition-transform"></div>
          <Image
            className="relative rounded-xl  filter"
            src={profileSrc}
            width={400}
            height={400}
          />
          <div className="absolute top-0 right-0 w-full h-full rounded-xl  backdrop-saturate-0 bg-white/10 group-hover:backdrop-saturate-100 transition"></div>
        </div>
      </div>
    </div>
  );
}
