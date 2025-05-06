import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Sidebar />
    <div className="ml-64">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  </div>
);

export default Layout;
