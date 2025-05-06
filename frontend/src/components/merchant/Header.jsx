import React from 'react';

const Header = () => (
  <header className="ml-64 h-16 bg-white flex items-center justify-between px-6 shadow">
    <div className="text-xl font-semibold">Dashboard</div>
    <div className="flex items-center">
      <button className="mr-4">🔔</button>
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  </header>
);

export default Header;
