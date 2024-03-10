'use client';

import React from 'react';
import {Title} from '../elements/Title';
import {TESTI_DATA} from '@/utils/Data';
import {cardVariants} from '@/utils/Animation';
import {motion} from 'framer-motion';

export const Testimonials = () => {
  return (
    <div id='testimonial' className='container mx-auto py-14'>
      <div className='mx-auto px-5 sm:px-12 divide-y-2 divide-gray-100'>
        <Title
          title='Ce que penses mes clients'
          description='Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.'
        />
      </div>
      <div className='mt-10'>
        <div className='px-4 sm:px-6 sm:column-2 lg:columns-3'>
          {TESTI_DATA.map((testimonial) => (
            <motion.div
              key={testimonial.author.name}
              variants={cardVariants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className='pt-8 sm:inline-block sm:w-full sm:px-4'
            >
              <figure className='rounded-xl bg-secondary p-8 text-sm leading-6'>
                <blockquote className='text-gray-900'>
                  <p>"{testimonial.body}</p>
                </blockquote>
                <figcaption className='mt-6 flex items-center gap-x-4'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={testimonial.author.imageUrl}
                    alt=''
                  />
                  <div>
                    <p className='font-semibold text-gray-900'>
                      {testimonial.author.name}
                    </p>
                    <p className='font-semibold text-gray-600'>
                      @{testimonial.author.handle}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
