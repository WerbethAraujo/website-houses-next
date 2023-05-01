import React, { useState, createContext, useEffect } from 'react';

// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState('Localização');
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState('Tipo de Propriedade');
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState('Faixa de preço');
  const [loading, setLoading] = useState(false);

  const prices = [
    { value: 'Faixa de preço' },
    { value: '100.000 - 150.000' },
    { value: '200.000 - 250.000' },
    { value: '300.000 - 350.000' },
    { value: '400.000 - 450.000' },
    { value: '500.000 - 550.000' },
  ];

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);

    const uniqueCountry = ['Localização (vazio)', ...new Set(allCountries)];

    setCountries(uniqueCountry);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);

    const uniqueProperty = ['Tipo de Propriedade', ...new Set(allProperties)];

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
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
