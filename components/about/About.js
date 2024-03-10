'use client';

import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';
import {cardVariants} from '@/utils/Animation';

export const About = () => {
  return (
    <div id='about' className='flex items-center bg-primary'>
      <div className='container relative px-6 sm:px-12 flex flex-col items-center justify-between py-4 mx-auto'>
        <motion.div
          variants={cardVariants}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className='flex flex-col-reverse items-center sm:grid sm:grid-cols-2 gap-4'
        >
          <div>
            <h2 className='max-w-3xl py-2 mx-auto text-4xl font-bold text-left text-gray-900 sm:text-6xl '>
              A propos de moi
            </h2>
            <p className='py-5'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </p>
          </div>
          <div>
            <Image
              width={587}
              height={628}
              src='/head.png'
              className='mx-auto'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
