import CompareProduct from './Product/CompareProduct';
// import data from '../../backend/data/vendors.json';

const Compare = () => {
  // TODO: Devolver una tienda en concreto, después de seleccionar en cual buscar.
  const [d1, comp] = data;
  const baseClasses = 'grid place-content-center max-w-[1280px] ';
  const isCompare = true;
  // console.log(d1);
  return (
    <section
      className={
        !isCompare ? baseClasses : baseClasses + 'h-4/5 sm:gap-2 sm:m-5 md:mx-auto md:my-0 '
      }
    >
      <CompareProduct {...d1} />

      {!isCompare || (
        <>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-25 sm:my-4 dark:opacity-100" />
          <CompareProduct {...comp} />
        </>
      )}
    </section>
  );
};

export default Compare;
