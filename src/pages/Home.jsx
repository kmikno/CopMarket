import Vendor from '../components/Vendor';
import { stores } from '../utils/constants';
const Home = () => {
  return (
    <>
      <section className="sm:mx-6 my-10">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-12">
          <div className="flex flex-col justify-center items-center  h-auto m-0 text-center text-main-800">
            <h1 className="font-Montserrat font-bold text-4xl m-5">Ahorrar es posible</h1>
            <p className="max-w-md">
              Empieza seleccionando uno de los mercado pradeños para buscar y comparar
              productos
            </p>
          </div>
          <div className="relative flex flex-wrap justify-center items-center gap-6">
            {stores.map((s) => {
              return <Vendor key={s.vendor} {...s} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
