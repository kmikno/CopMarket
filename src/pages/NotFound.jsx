import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <p className="text-center text-xl">
      Page not found please redirect to{' '}
      <Link to="/" className="text-indigo-500 underline decoration-double">
        Home
      </Link>
    </p>
  );
};

export default NotFound;
