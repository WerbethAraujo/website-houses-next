import React, { useState, createContext, useEffect } from 'react';

// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState('Localização (vazio)');
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState('Propriedade (vazio)');
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState('Faixa de preço (vazio)');
  const [loading, setLoading] = useState(false);

  const handleFilteredHouses = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(' ').includes('(vazio)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.property === property;
      }

      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  const prices = [
    { value: 'Faixa de preço' },
    { value: '100000 - 130000' },
    { value: '130000 - 160000' },
    { value: '160000 - 190000' },
    { value: '190000 - 220000' },
    { value: '10000 - 30000' },
    { value: '30000 - 40000' },
  ];

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);

    const uniqueCountry = ['Localização (vazio)', ...new Set(allCountries)];

    setCountries(uniqueCountry);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);

    const uniqueProperty = ['Propriedade (vazio)', ...new Set(allProperties)];

    setProperties(uniqueProperty);
  }, []);

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        prices,
        loading,
        handleFilteredHouses,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
