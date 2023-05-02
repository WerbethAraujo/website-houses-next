import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <article className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full mx-auto max-w-[352px] cursor-pointer hover:shadow-2xl transition'>
      <img src={image} alt='imagem da propriedade' className='mb-8' />
      <div className='flex mb-4 gap-x-2 text-sm'>
        <span className='bg-green-500 rounded-full text-white px-3'>
          {type}
        </span>
        <span className='bg-violet-500 rounded-full text-white px-3'>
          {country}
        </span>
      </div>
      <span className='block text-lg font-semibold max-w-[260px gap-1]'>
        {address}
      </span>
      <div className='flex  gap-x-4 m-y-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <span className='text-[20px]'>
            <BiBed />
          </span>
          <span>{bedrooms}</span>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <span className='text-[20px]'>
            <BiBath />
          </span>
          <span>{bathrooms}</span>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <span className='text-[20px]'>
            <BiArea />
          </span>
          <span>{surface}</span>
        </div>
      </div>
      <span className='block text-lg font-semibold text-violet-600 mb-4'>
        {price}
      </span>
    </article>
  );
};

export default House;
