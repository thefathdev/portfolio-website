export default function EmailLink() {
  return (
    <div className="hidden fixed rotate-90 bottom-28 -right-24  lg:-right-10 md:flex items-center gap-2 pointer-events-auto">
      <a
        className="font-medium text-gray-500 hover:text-blue-600 hover:-translate-x-2 transition-transform"
        href="mailto:abdillahfathu@gmail.com"
      >
        abdillahfathu@gmail.com
      </a>
      <div className="w-[72px] h-[2px] bg-gray-500"></div>
    </div>
  );
}
