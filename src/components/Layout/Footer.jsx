import React from 'react';
import { HeartIcon } from '@heroicons/react/20/solid';
const Footer = () => {
  return (
    <footer className="relative bottom-0 grid justify-center items-center col-span-full w-full bg-slate-400/20">
      <p className="text-main-800 p-4">
        &copy; Made with <HeartIcon className="inline h-5 w-5 text-indigo-500" />{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
