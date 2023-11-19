import React from 'react';
import { NavLink } from 'react-router-dom';

const LayoutNavigation = () => {
  return (
    <header className="col-span-full w-full flex justify-between text-main-800 px-6 items-center mb-2 max-w-7xl md:mx-auto">
      <NavLink to="/" className="font-bold text-xl sm:text-3xl">
        <p className="text-center rounded-lg bg-transparent">CopMarket</p>
      </NavLink>
      <nav className="">
        <ul className="flex gap-2">
          <li className="p-4 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-indigo-400 underline decoration-double' : 'text-main-800'
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="p-4 font-semibold">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-indigo-400 underline decoration-double' : 'text-main-800'
              }
            >
              Sobre Nosotros
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LayoutNavigation;
