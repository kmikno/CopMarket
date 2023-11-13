import React from 'react';
import SearchBar from '../components/SearchBar';
import { Outlet } from 'react-router-dom';

const Store = () => {
  return (
    <main>
      <SearchBar />
      <Outlet />
    </main>
  );
};

export default Store;
