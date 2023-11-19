import CardProduct from '../Product/CardProduct';

const GridProducts = (props) => {
  const { products, vendor, lastUpdate } = props;
  return (
    <>
      {products ? (
        <>
          <div className="m-6 text-center sm:mx-auto sm:my-6 sm:max-w-2xl">
            Última actualización: {lastUpdate}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] my-6 gap-3 grid-flow-dense place-content-center max-w-7xl sm:mx-6 sm:gap-4 xl:mx-auto">
            {products.map((p) => (
              <CardProduct key={p.title + p.price} product={p} vendor={vendor.toUpperCase()} />
            ))}
          </div>
        </>
      ) : (
        <div className="m-6">No hay productos para mostrar</div>
      )}
    </>
  );
};

export default GridProducts;
