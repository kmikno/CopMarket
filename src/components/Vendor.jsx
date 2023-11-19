import React from 'react';
import { Link } from 'react-router-dom';

const Vendor = ({ img, link, vendor }) => {
  return (
    <Link to={link} className="focus:outline-8 focus:rounded-full focus:outline-offset-4">
      <img className="rounded-full shadow-lg w-28" src={img} alt={vendor} />
    </Link>
  );
};

export default Vendor;
