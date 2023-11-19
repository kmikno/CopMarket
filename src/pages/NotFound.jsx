import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <p className="text-center text-xl">
      Pagina no encontrada{' '}
      <span>
        volver al{' '}
        <Link to="/" className="text-indigo-500 underline decoration-double">
          Inicio
        </Link>
      </span>
    </p>
  );
};

export default NotFound;
