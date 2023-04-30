import React from 'react';

// import banner
import BannerImage from '../assets/img/house-banner.png';

// import components
import Search from './Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 lg:items-start lg:text-left lg:px-0 xl:ml-[135px] flex flex-col items-center text-center px-4 justify-center flex-1'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span>Your Dream House With
            Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            numquam dolorem totam magni repellat commodi culpa hic blanditiis
            impedit ullam!
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={BannerImage} alt='banner principal' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
