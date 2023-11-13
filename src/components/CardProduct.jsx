const CardProduct = ({ products, vendor }) => {
  const random = Math.floor(Math.random() * 4);
  console.log(random);
  return (
    <article className="flex justify-center items-center flex-col p-4 mx-5 min-h-[350px] shadow-md rounded-lg max-h-96 outline outline-indigo-500 outline-offset-2 outline-1 sm:min-w-full sm:mx-auto sm:max-w-xs">
      <div className="flex flex-col items-center">
        <figure className="w-48 sm:h-auto">
          <img
            className="rounded-lg shadow-lg sm:w-60"
            src={products[random].img}
            alt="product img"
            srcSet=""
          />
        </figure>
      </div>

      <div className="flex flex-col gap-2 m-2 w-2/3 sm:w-auto">
        <p>{vendor}</p>
        <p
          title={products[random].title}
          className="text-md font-semibold text-main-800 text-ellipsis overflow-hidden text-md max-h-12 relative "
        >
          {products[random].title}
        </p>
        <div className="flex justify-between">
          <p className="text-sm font-bold rounded-lg px-2 py-1 w-max ring-indigo-500 ring-1 sm:text-lg">
            {products[random].price}
          </p>
          <button className=" text-sm font-bold text-white bg-main-800 rounded-lg px-2 py-1 w-max sm:text-lg shadow-lg shadow-main-800/40 hover:shadow-indigo-500/20 hover:bg-indigo-500">
            Comparar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProduct;
