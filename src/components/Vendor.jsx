import React from 'react';
import { Link } from 'react-router-dom';

const Vendor = ({ props }) => {
  const { img, link, vendor } = props;
  return (
    <Link to={link}>
      <img className="rounded-full shadow-lg w-28" src={img} alt={vendor} />
    </Link>
  );
};

export default Vendor;
