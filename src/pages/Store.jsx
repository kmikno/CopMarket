import SearchBar from '../components/SearchBar';
import GridProducts from '../components/Layout/GridProducts';
import { useLoaderData, useParams } from 'react-router-dom';

import cart from '../assets/images/shoppingCart.png';
const Store = () => {
  const { store } = useParams();
  const response = useLoaderData();
  if (typeof response?.lastUpdate === 'number') {
    response.lastUpdate = new Date(response.lastUpdate).toLocaleDateString('es-CO', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  return (
    <>
      <SearchBar vendor={store} />
      {response && typeof response === 'object' ? (
        <GridProducts
          products={response.data}
          vendor={store}
          lastUpdate={response.lastUpdate}
        />
      ) : (
        <div className="flex flex-col mx-auto my-5 w-full text-center">
          <p>{response ?? 'No hay productos para mostrar'}</p>
          <img
            className="aspect-square w-60 h-full self-center"
            src={cart}
            alt="Buscar un producto para comparar"
          />
        </div>
      )}
    </>
  );
};

export default Store;
