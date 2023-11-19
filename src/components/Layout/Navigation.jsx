import { useState, useEffect, useRef } from 'react';

import { Bars3BottomRightIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

const LayoutNavigation = () => {
  const menu = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menu.current) return;

      if (e.code === 'Escape') {
        return setActive(false);
      } else if (!menu?.current.contains(e?.target) && !e.key) return setActive(false);
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', handler);
  }, []);
  return (
    <header
      ref={menu}
      className="col-span-full w-full flex justify-between text-main-800 px-6 items-center my-2 max-w-7xl md:mx-auto"
    >
      <NavLink to="/" className="font-bold text-xl sm:text-3xl">
        <p className="text-center rounded-lg bg-transparent">CopMarket</p>
      </NavLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        onClick={() => {
          setActive(!active);
        }}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-main-800 hover:text-indigo-400 hover:ring-indigo-400 hover:ring-2"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3BottomRightIcon className="w-7 h-7" />
      </button>
      <nav
        className={
          active
            ? 'w-full sm:block sm:w-auto absolute top-14 left-0 z-40 sm:relative sm:top-0'
            : 'hidden sm:block'
        }
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col border sm:items-center border-gray-100 rounded-lg bg-gray-50 shadow-md sm:shadow-none sm:flex-row sm:space-x-4 rtl:space-x-reverse sm:mt-0 sm:border-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'underline py-2 px-3 text-indigo-600 rounded block bg-indigo-100 hover:bg-gray-100'
                  : 'block hover:underline py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-indigo-700 '
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'underline py-2 px-3 text-indigo-600 rounded block bg-indigo-100 hover:bg-gray-100'
                  : 'block hover:underline py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-indigo-700 '
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
