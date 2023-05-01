import React, { useState, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

// import handles
import { Menu } from '@headlessui/react';

// import house context
import { HouseContext } from '../context/HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice, prices } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Escolha a faixa de preço</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, idx) => (
          <Menu.Item
            onClick={() => setPrice(price.value)}
            key={idx}
            as='li'
            className='cursor-pointer hover:text-violet-700 transition'
          >
            {price.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
