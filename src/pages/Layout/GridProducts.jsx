import React from 'react';
import data from '../../../backend/data/vendors.json';
import CardProduct from '../../components/CardProduct';

const GridProducts = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-6 gap-2 grid-flow-dense place-content-center max-w-7xl sm:mx-6 sm:gap-4 xl:mx-auto">
      <CardProduct {...data[0]} />
      <CardProduct {...data[0]} />
      <CardProduct {...data[1]} />
      <CardProduct {...data[1]} />
      <CardProduct {...data[1]} />
    </div>
  );
};

export default GridProducts;
