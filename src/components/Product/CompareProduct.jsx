import React from 'react';

const CompareProduct = ({ product: { title, price, img, url }, update }) => {
  if (typeof update === 'number') {
    update = new Date(update).toLocaleDateString('es-CO', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  return (
    <article className="flex justify-center items-center flex-row sm:gap-2 sm:max-w-lg">
      <div className="flex flex-col items-center">
        <figure className="w-48 sm:h-auto">
          <img
            className="rounded-lg shadow-md sm:w-60"
            src={img}
            alt="product img"
            srcSet=""
          />
        </figure>
        <div className="p-2 text-center order-[-1] sm:order-1">
          <p className="text-sm">Ultima actualización</p>
          <p className="text-xs">{update}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 m-2 w-2/3 sm:w-auto">
        <p className="text-indigo-500 font-semibold">{}</p>
        <p className="text-md text-main-800 text-md overflow-hidden text-ellipsis">{title}</p>
        <p className="text-lg font-bold text-white bg-main-800 rounded-lg px-2 py-1 w-max">
          {price}
        </p>
      </div>
    </article>
  );
};

export default CompareProduct;
