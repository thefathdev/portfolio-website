import SocialLink from './socialLink';

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center max-w-5xl mx-auto px-8 md:px-20 lg:px-24 xl:px-8 py-8">
      <FooterSocialLink />
      <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
        Redesigned & developed by Fathul Irfaan Abdillah
      </p>
      <div className="text-xs sm:text-sm font-medium text-gray-600">
        Heavily inspired by{' '}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="text-gray-900 hover:text-blue-600"
        >
          Brittany Chiang
        </a>
      </div>
    </footer>
  );
}

function FooterSocialLink() {
  return (
    <div className="md:hidden flex gap-2 mb-2 sm:mb-4">
      {/* Github */}
      <a
        href="https://github.com/whatTheFath"
        className=" hover:-translate-y-2 transition-transform"
      >
        <span className="sr-only">my github repositories</span>
        <svg
          className="hover:fill-blue-600 hover:cursor-pointer"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#71717A"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9989 4C9.37254 4 4 9.37254 4 16.0004C4 21.3022 7.43804 25.7996 12.2065 27.3871C12.8069 27.4969 13.0257 27.1263 13.0257 26.8081C13.0257 26.5237 13.0154 25.7686 13.0095 24.7675C9.67163 25.4924 8.96737 23.1586 8.96737 23.1586C8.4215 21.7729 7.63473 21.4038 7.63473 21.4038C6.5452 20.6591 7.71724 20.6738 7.71724 20.6738C8.9217 20.7593 9.55523 21.9107 9.55523 21.9107C10.6256 23.7443 12.3642 23.2146 13.0478 22.9081C13.1568 22.1324 13.4662 21.6035 13.8095 21.3037C11.145 21.0009 8.34341 19.971 8.34341 15.3727C8.34341 14.0629 8.8112 12.9918 9.57881 12.1527C9.45505 11.8492 9.04325 10.6293 9.69594 8.97695C9.69594 8.97695 10.7037 8.65429 12.9962 10.2072C13.9532 9.94125 14.9801 9.80791 16.0004 9.80349C17.0192 9.80791 18.0461 9.94125 19.0045 10.2072C21.2956 8.65429 22.3011 8.97695 22.3011 8.97695C22.956 10.6293 22.5442 11.8492 22.4205 12.1527C23.1895 12.9918 23.6544 14.0629 23.6544 15.3727C23.6544 19.9828 20.8484 20.9972 18.175 21.2941C18.606 21.6646 18.9898 22.3969 18.9898 23.5166C18.9898 25.1204 18.975 26.4147 18.975 26.8081C18.975 27.1293 19.1909 27.5027 19.8001 27.3856C24.5649 25.7951 28 21.3007 28 16.0004C28 9.37254 22.6267 4 15.9989 4Z"
            fill="inherit"
          />
        </svg>
      </a>
      {/* Twitter */}
      <a
        href="https://twitter.com/FathulIrfaan"
        className=" hover:-translate-y-2 transition-transform"
      >
        <span className="sr-only">my twitter account</span>
        <svg
          className="hover:fill-blue-600 hover:cursor-pointer "
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#71717A"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.3622 10.785C26.3713 11.0182 26.3743 11.2513 26.3743 11.4845C26.3743 18.5541 21.4012 26.7155 12.3071 26.7155C9.51351 26.7155 6.91591 25.8252 4.72729 24.3095C5.11417 24.3519 5.50708 24.3838 5.90602 24.3838C8.22225 24.3838 10.3556 23.5251 12.0478 22.0836C9.88431 22.0518 8.05746 20.4937 7.4274 18.3739C7.72987 18.4375 8.04136 18.4694 8.35991 18.4694C8.80909 18.4694 9.2452 18.4059 9.66323 18.2787C7.39924 17.7911 5.69399 15.629 5.69399 13.0322C5.69399 13.0004 5.69399 12.9897 5.69399 12.9685C6.36123 13.3607 7.12492 13.6043 7.93585 13.6361C6.60741 12.6716 5.73416 11.0288 5.73416 9.17396C5.73416 8.19884 5.97734 7.27668 6.40542 6.48175C8.84324 9.72507 12.488 11.8555 16.5969 12.0781C16.5125 11.6859 16.4693 11.2727 16.4693 10.8593C16.4693 7.90216 18.683 5.50671 21.4142 5.50671C22.8361 5.50671 24.1204 6.15335 25.0217 7.19206C26.1502 6.95888 27.2073 6.51375 28.164 5.899C27.7932 7.1497 27.0104 8.19879 25.9874 8.85594C26.9883 8.72875 27.9429 8.44279 28.8282 8.01883C28.164 9.08933 27.3279 10.0325 26.3622 10.785Z"
            fill="inherit"
          />
        </svg>
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/fathul-irfaan-410374230/"
        className=" hover:-translate-y-2 transition-transform"
      >
        <span className="sr-only">my linkedin account</span>
        <svg
          className="hover:fill-blue-600 hover:cursor-pointer "
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#71717A"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.27563 4.66675C5.38707 4.66675 4.66675 5.38707 4.66675 6.27563V25.7245C4.66675 26.613 5.38707 27.3334 6.27564 27.3334H25.7245C26.6131 27.3334 27.3334 26.613 27.3334 25.7245V6.27563C27.3334 5.38707 26.6131 4.66675 25.7245 4.66675H6.27563ZM9.75437 11.7059C10.8403 11.7059 11.7207 10.8255 11.7207 9.73956C11.7207 8.65359 10.8403 7.77323 9.75437 7.77323C8.6684 7.77323 7.78805 8.65359 7.78805 9.73956C7.78805 10.8255 8.6684 11.7059 9.75437 11.7059ZM13.5215 13.1591H16.7804V14.652C16.7804 14.652 17.6647 12.8833 20.0708 12.8833C22.2172 12.8833 23.9953 13.9406 23.9953 17.1636V23.9598H20.6182V17.9871C20.6182 16.0859 19.6032 15.8768 18.8297 15.8768C17.2245 15.8768 16.9497 17.2613 16.9497 18.2351V23.9598H13.5215V13.1591ZM11.4685 13.1591H8.04028V23.9598H11.4685V13.1591Z"
            fill="inherit"
          />
        </svg>
      </a>
    </div>
  );
}
