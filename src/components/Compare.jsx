import CompareProduct from './Product/CompareProduct';
import d1 from '../../backend/data/D1_huevos.json';
import vaq from '../../backend/data/Vaquita_huevos.json';

const Compare = () => {
  // TODO: Devolver una tienda en concreto, después de seleccionar en cual buscar.
  const isCompare = true;
  return (
    <section className="grid place-content-center gap-5 my-7 mx-2 sm:max-w-7xl">
      <CompareProduct product={{ ...d1.data[4] }} update={d1.lastUpdate} />

      {!isCompare || (
        <>
          <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />
          <CompareProduct product={{ ...vaq.data[0] }} update={vaq.lastUpdate} />
        </>
      )}
    </section>
  );
};

export default Compare;
