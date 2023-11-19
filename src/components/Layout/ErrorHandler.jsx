import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

import { LinkIcon } from '@heroicons/react/20/solid';
import LayoutNavigation from './Navigation';
import Footer from './Footer';

const ErrorHandler = () => {
  const error = useRouteError();
  console.log({ error });
  return (
    <div className="flex flex-col h-full">
      <LayoutNavigation />
      <div className="mx-6 flex-1">
        La petición no devolvió lo que esperaba, verificar si el servidor esta activo{' '}
        <span className="text-red-800 font-semibold">
          <Link to="/">
            Regresar a inicio <LinkIcon className="w-5 inline-block" />
          </Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorHandler;
