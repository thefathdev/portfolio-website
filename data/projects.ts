import {ProjectPropsWithId} from '../components/projects';

export const projects: ProjectPropsWithId[] = [
  {
    id: 1,
    name: 'Personal Website',
    desc: 'Portfolio website I designed and developed with nextjs and tailwindcss',
    preview: 'https://fathdev.vercel.app/',
    repo: 'https://github.com/whatTheFath/portfolio-website',
    techs: ['Nextjs', 'Tailwindcss', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Sunny Side Landing Page',
    desc: 'Building responsive landing page with animation and css grid',
    preview: 'https://sunnyside-landing-page-one.vercel.app/',
    repo: 'https://github.com/whatTheFath/sunnyside-landing-page',
    techs: ['JavaScript', 'Sass/Scss', 'GSAP'],
  },
  {
    id: 3,
    name: 'Shortly',
    desc: 'A single page app for helping me and my friends shortening urls using third party api',
    preview: 'https://shortly-whatthefath.vercel.app/',
    repo: 'https://github.com/whatTheFath/shortly',
    techs: ['SvelteKit', 'JavaScript', 'Sass/Scss'],
  },
  {
    id: 4,
    name: 'Calcy Funny',
    desc: 'A simple calculator with three different color themes',
    preview: 'https://calcy-funny.vercel.app/',
    repo: 'https://github.com/whatTheFath/calculator-svelte-ts',
    techs: ['TypeScript', 'Sass/Scss', 'SvelteKit'],
  },
  {
    id: 5,
    name: 'Advice Generator App',
    desc: 'Generating useful advice for my daily basis',
    preview: 'https://whatthefath.github.io/advice-generator-app/',
    repo: 'https://github.com/whatTheFath/advice-generator-app',
    techs: ['Sass/Scss', 'JavaScript'],
  },
  {
    id: 6,
    name: 'Time Tracking Dashboard',
    desc: 'Simple website to display time spent every day, week, and month',
    preview: 'https://time-tracking-dashboard-two-gray.vercel.app/',
    repo: 'https://github.com/whatTheFath/time-tracking-dashboard',
    techs: ['JavaScript', 'Sass/Scss'],
  },
];
