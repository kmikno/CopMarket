import React from 'react';

const CompareProduct = ({ products, vendor }) => {
  return (
    <div className="flex justify-center items-center  flex-col sm:flex-row sm:gap-2  sm:max-w-2xl">
      <div className="flex flex-col items-center">
        <figure className="w-48 sm:h-auto">
          <img
            className="rounded-lg shadow-md sm:w-60"
            src={products[0].img}
            alt="product img"
            srcSet=""
          />
        </figure>
        <div className="p-2 text-center order-[-1] sm:order-1">
          <p className="text-sm">Ultima actualización</p>
          <p className="text-xs">2023-11-07 12:30pm</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 m-2 w-2/3 sm:w-auto">
        <p>{vendor}</p>
        <p className="text-md font-semibold text-main-800 sm:text-2xl">{products[0].title}</p>
        <p className="text-sm font-bold text-white bg-main-800 rounded-lg px-2 py-1 w-max sm:text-lg">
          {products[0].price}
        </p>
      </div>
    </div>
  );
};

export default CompareProduct;
