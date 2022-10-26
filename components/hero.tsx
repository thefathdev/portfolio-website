import TextLink from './textLink';
import {motion} from 'framer-motion';
import {slideUp} from '../animations/textAnimation';

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-8 md:px-20 lg:px-24 xl:px-8 py-16"
    >
      <motion.p
        variants={slideUp(0)}
        initial="hidden"
        whileInView="visible"
        className="text-lg sm:text-2xl text-blue-600 font-medium mb-1 sm:mb-4"
      >
        Hi!, my name is
      </motion.p>
      <motion.h1
        variants={slideUp(1)}
        initial="hidden"
        whileInView="visible"
        className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-1 sm:mb-4"
      >
        Fathul Irfaan Abdillah.
      </motion.h1>
      <motion.h2
        variants={slideUp(2)}
        initial="hidden"
        whileInView="visible"
        className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-500 mb-4 sm:mb-6"
      >
        I craft things for{' '}
        <span className="text-blue-600 inline-block relative">
          <span className="z-10">the web.</span>
          <span className="inline-block absolute w-full left-0 translate-x-1 translate-y-1 blur-sm opacity-50 z-0">
            the web.
          </span>
        </span>
      </motion.h2>
      <motion.div
        variants={slideUp(3)}
        initial="hidden"
        whileInView="visible"
        className="text-base sm:text-xl font-medium text-gray-500 max-w-[54ch]"
      >
        I’m a javascript developer focused on building{' '}
        <TextLink href="https://web.dev/learn/accessibility/">accessible</TextLink> and{' '}
        <TextLink href="https://web.dev/learn/design/">responsive website.</TextLink> Leveraging
        solution with best-practice technologies is my guiding compass.
      </motion.div>
    </div>
  );
}
