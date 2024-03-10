'use client';

import React from 'react';
import {Title} from '../elements/Title';
import {PROJETS_DATA} from '@/utils/Data';
import ClassNames from '@/utils/ClassNames';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {cardVariants} from '@/utils/Animation';

export const Projects = () => {
  return (
    <div id='projets' className='bg-secondary pb-20 pt-16 lg:pb-28 lg:pt-24'>
      <div className='container relative mx-auto px-5 sm:px-12 divide-y-2 divide-gray-200'>
        <Title
          title='Mes Projets Recents'
          description='Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
        dictumst amet. Sapien tortor lacus arcu.'
        />
      </div>
      <div className='mt-12 grid gap-10 px-16 pt-12 lg:grid-cols-3 '>
        {PROJETS_DATA.map((projet) => (
          <motion.div
            key={projet.title}
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <div>
              <div className='inline-block'>
                <span
                  className={ClassNames(
                    projet.category.color,
                    'inline-flex items-center text-blue-500 rounded-full px-3 py-0.5 text-sm font-medium'
                  )}
                >
                  {projet.category.name}
                </span>
              </div>
            </div>
            <div className='my-2'>
              <Image
                src={projet.img}
                width={487}
                height={500}
                alt={projet.title}
                className='mx-auto rounded-md'
              />
            </div>
            <div className='mt-4 '>
              <p className='text-xl font-semibold text-gray-900'>
                {projet.title}
              </p>
              <p className='text-base  text-gray-500'>{projet.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
