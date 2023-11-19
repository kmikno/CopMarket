import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Form } from 'react-router-dom';
const SearchBar = (props) => {
  const searchText = React.useRef();

  /**
   * Function that triggers the Backend API
   * @param {React.FormEvent} evt
   */
  const handleSubmit = (evt) => {
    // evt.preventDefault();
    // console.log(evt.target);
    // console.log(searchText.current.value);
  };
  return (
    <search
      role="search"
      className="sticky w-full top-0 z-10 bg-white/30 py-5 backdrop-blur-sm"
    >
      <Form
        method="get"
        className="flex justify-center items-center gap-1 mx-auto w-full px-6 sm:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="q"
          id="q"
          autoFocus={true}
          autoComplete="false"
          placeholder={`Buscar producto en ${props.vendor}`}
          className="bg-gray-50 shadow-lg p-2 rounded-lg w-[inherit] focus:outline-5 focus:outline-offset-1"
          ref={searchText}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-full h-7 text-indigo-500" />
        </button>
      </Form>
    </search>
  );
};

export default SearchBar;
