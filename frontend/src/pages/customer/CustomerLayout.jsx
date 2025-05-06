import { Link, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/customer/dashboard" },
  { label: "Order History", path: "/customer/orders" },
  { label: "Submit Review", path: "/customer/reviews" },
  { label: "Invoices", path: "/customer/invoices" },
];

const CustomerLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Customer Panel</h2>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-xl font-medium ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;
