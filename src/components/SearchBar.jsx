import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
const SearchBar = () => {
  const searchText = React.useRef();
  /**
   * Function that triggers the Backend API
   * @param {React.FormEvent} evt
   */
  const handleSubmit = (evt) => {
    // evt.preventDefault();
    console.log(evt.target);
    console.log(searchText.current.value);
  };
  return (
    <form
      action="products"
      method="get"
      className="flex justify-center items-center gap-1 mx-auto my-0 w-full px-6 sm:max-w-2xl"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="q"
        id="q"
        autoFocus={true}
        autoComplete="false"
        placeholder="Buscar producto"
        className="bg-gray-200/10 shadow-lg p-2 rounded-lg w-[inherit] ring-indigo-400 ring-1"
        ref={searchText}
      />
      <button type="submit">
        <MagnifyingGlassIcon className="w-8 h-10 text-indigo-500" />
      </button>
    </form>
  );
};

export default SearchBar;
