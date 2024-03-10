import React from 'react';

export const Title = ({title, description}) => {
  return (
    <div>
      <h2 className='text-3xl text-blue-500 font-bold text-gray-900 sm:text-4xl'>
        {title}
      </h2>
      <p className='mt-3 text-xl text-gray-500 sm:mt-4 '>{description}</p>
    </div>
  );
};
