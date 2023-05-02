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

  function handleFilteredHouses() {
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
    });

    console.log(newHouses);
  }

  const prices = [
    { value: 'Faixa de preço' },
    { value: '100000 - 150000' },
    { value: '200000 - 250000' },
    { value: '300000 - 350000' },
    { value: '400000 - 450000' },
    { value: '500000 - 550000' },
  ];

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);

    const uniqueCountry = ['Localização (vazio)', ...new Set(allCountries)];

    setCountries(uniqueCountry);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);

    const uniqueProperty = [
      'Tipo de Propriedade (vazio)',
      ...new Set(allProperties),
    ];

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
