'use client';

import {SOCIAL_LINK} from '@/utils/Data';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';
import {cardVariants, hoverEffect} from '@/utils/Animation';

export const Footer = () => {
  return (
    <div id='contact' className='container mx-auto'>
      <div className='py-20 sm:py-24'>
        <div className='text-center flex flex-col justify-center item-center mx-auto'>
          <h3 className='text-4xl font-bold text-gray-900 '>
            Vous avez un projet qui a besoin de moi ? <br />
            Travaillons ensemble
          </h3>
          <div className='mt-10 flex justify-center space-x-10'>
            {SOCIAL_LINK.map((social) => (
              <motion.a
                href={social.href}
                className='text-gray-400 hover:text-gray-800'
                variants={cardVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                whileHover={hoverEffect}
              >
                <social.icon className='h-10 w-10' />
              </motion.a>
            ))}
          </div>

          <div className='my-10'>
            <Link
              href='#contact'
              className=' px-4 py-2 text-gray-800 bg-transparent border-2 border-gray-800 md:my-14 '
            >
              CONTACTEZ-MOI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
