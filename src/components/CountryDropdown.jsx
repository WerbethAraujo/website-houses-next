import React, { useState, useContext } from 'react';

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// import handles
import { Menu } from '@headlessui/react';

// import house context
import { HouseContext } from '../context/HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Selecione o lugar</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, idx) => (
          <Menu.Item
            onClick={() => setCountry(country)}
            key={idx}
            as='li'
            className='cursor-pointer hover:text-violet-700 transition'
          >
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
