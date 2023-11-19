import { useNavigate } from 'react-router-dom';

const CardProduct = (props) => {
  const { product, vendor } = props;
  const navigate = useNavigate();
  /**
   *
   * @param {React.MouseEvent} evt click event register
   */
  const handleCompareBtn = (evt) => {
    navigate('/compare');
    console.log(evt.currentTarget.parentElement);
  };

  return (
    <article className="flex justify-center border border-solid border-indigo-500 items-center flex-col gap-2 p-4 shadow-md rounded-lg max-h-96 sm:min-w-full sm:mx-auto sm:max-w-xs sm:gap-4 hover:shadow-xl hover:shadow-indigo-400/20">
      <div className="flex flex-col items-center">
        <picture className="aspect-square w-48 sm:h-auto">
          <img
            className="object-cover rounded-xl shadow-md sm:w-60"
            src={product.img}
            alt={product.name}
            srcSet=""
          />
        </picture>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <p className="text-indigo-500 font-semibold">{vendor}</p>
        <p
          title={product.title}
          className="text-md text-main-800 truncate text-md sm:w-[200px] h-12"
        >
          {product.title}
        </p>

        <div className="flex justify-between">
          <p className="text-sm font-bold rounded-lg px-2 py-1 w-max ring-indigo-500 ring-1 sm:text-lg">
            {product.price}
          </p>
          <button
            onClick={handleCompareBtn}
            className=" text-sm font-bold text-white bg-main-800 rounded-lg px-2 py-1 w-max sm:text-lg shadow-lg shadow-main-800/40 hover:shadow-indigo-500/20 hover:bg-indigo-500 focus:outline-4 focus:outline-offset-2"
          >
            Comparar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProduct;
