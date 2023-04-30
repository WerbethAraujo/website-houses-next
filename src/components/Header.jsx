import React from 'react';

// import link
import { Link } from 'react-router-dom';

// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='mb-12 border-b py-6'>
      <div className='container max-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='logo homeland' />
        </Link>
        <div className='flex items-center gap-6'>
          <Link to='' className='hover:text-violet-900 transition'>
            Log In
          </Link>
          <Link
            to=''
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
