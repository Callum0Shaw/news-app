import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../features/header/components/Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
