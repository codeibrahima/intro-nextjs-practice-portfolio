import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

export const Hero = () => {
  return (
    <main className='relative sm:h-screen overflow-hidden bg-primary'>
      <Navbar />
      <div className='relative flex items-center px-5 sm:px-12'>
        <div className='container relative flex-col items-center justify-between px-6 py-4 mx-auto'>
          <div className='grid grid-cols-1 items-center sm:grid-cols-2 gap-3'>
            <div>
              <p>Hi, je suis Akim ✌🏾</p>
              <h1 className='py-2 mx-auto text-4xl sm:text-6xl font-bold text-left text-gray-800'>
                Je conçois des applications web et mobiles
              </h1>
              <div className='my-10'>
                <Link
                  href='#contact'
                  className=' px-4 py-2 text-gray-800 bg-transparent border-2 border-gray-800 md:my-14 '
                >
                  CONNECTONS-NOUS
                </Link>
              </div>
            </div>
            <div className='hidden sm:block'>
              <Image
                width={624}
                height={724}
                src='/body.png'
                className='mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
