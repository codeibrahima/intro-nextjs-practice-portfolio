import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className='flex items-center w-full h-24 sm:32'>
      <div className='container flex items-center justify-left px-5 sm:px-12 sm:justify-between mx-auto'>
        <div className='hidden sm:flex items-center'>
          <nav>
            <Link className='px-3 py-2' href='#projets'>
              Mes Projets
            </Link>
            <Link className='px-3 py-2' href='#testimonial'>
              Testimonial
            </Link>
            <Link className='px-3 py-2' href='#contact'>
              Me Contacter
            </Link>
          </nav>
        </div>
        <div className='flex items-center text-gray-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            />
          </svg>
          <span className='ml-3'>MONEMAIL@MAIL.COM</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
