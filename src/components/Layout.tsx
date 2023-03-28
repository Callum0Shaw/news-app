import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  const [selectedSource, setselectedSource] = useState('all');

  return (
    <>
      <Header selectedSource={selectedSource} />
      <Outlet context={[selectedSource, setselectedSource]} />
    </>
  );
}

export default Layout;
