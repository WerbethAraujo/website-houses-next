import React, { useContext } from 'react';

// import context
import { HouseContext } from '../context/HouseContext';

// import components
import House from './House';

// import link
import { Link } from 'react-router-dom';

// import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, idx) => (
            <Link to={`/property/${house.id}`} key={idx}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;