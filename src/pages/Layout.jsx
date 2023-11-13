import React from 'react';
import Content from './Layout/Content';
import LayoutNavigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      {/* <LayoutNavigation /> */}
      <Content />
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
