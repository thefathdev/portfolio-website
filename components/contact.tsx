import Button from './button';

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-8 py-16"
    >
      <div className="flex items-center gap-2 justify-center mb-6 sm:mb-10">
        <div className="w-10 h-[2px] bg-gray-500"></div>
        <h2 className="text-gray-900 font-bold text-3xl sm:text-5xl lg:text-6xl">Get In Touch</h2>
        <div className="w-10 h-[2px] bg-gray-500"></div>
      </div>
      <div className="flex justify-center">
        <p className="text-base sm:text-xl font-medium text-gray-500 max-w-[54ch] mb-4 sm:mb-9 text-center">
          Well, whether you have a question for me or just look around. Feel free to contact me!
        </p>
      </div>
      <div className="flex justify-center">
        <Button href="mailto:abdillahfathu@gmail.com" size="large">
          Say Hello
        </Button>
      </div>
    </div>
  );
}
