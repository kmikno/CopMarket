import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 grid col-span-full w-full bg-yellow-200 h-10">
      Copyright {new Date().getFullYear()} ㊢
    </footer>
  );
};

export default Footer;
