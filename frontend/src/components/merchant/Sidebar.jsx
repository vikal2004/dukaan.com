import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-800 text-white fixed">
    <div className="p-6 text-2xl font-bold">Merchant Panel</div>
    <nav className="mt-10">
      <Link to="/dashboard" className="block py-2.5 px-4 hover:bg-gray-700">Dashboard</Link>
      <Link to="/products" className="block py-2.5 px-4 hover:bg-gray-700">Products</Link>
      <Link to="/orders" className="block py-2.5 px-4 hover:bg-gray-700">Orders</Link>
      <Link to="/settings" className="block py-2.5 px-4 hover:bg-gray-700">Settings</Link>
      <Link to="/logout" className="block py-2.5 px-4 hover:bg-gray-700">Logout</Link>
    </nav>
  </div>
);

export default Sidebar;
