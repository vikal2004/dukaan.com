import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Your Dashboard 👋
        </h1>

        {/* Quick actions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Order History */}
          <Link
            to="/customer/orders"
            className="bg-white shadow-md rounded-2xl p-6 hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              🛍️ Order History
            </h2>
            <p className="text-gray-600">View all your previous orders.</p>
          </Link>

          {/* Submit Review */}
          <Link
            to="/customer/reviews"
            className="bg-white shadow-md rounded-2xl p-6 hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              ✍️ Submit Review
            </h2>
            <p className="text-gray-600">Share your feedback on products.</p>
          </Link>

          {/* Download Invoice */}
          <Link
            to="/customer/invoice/123" // You can dynamically replace "123"
            className="bg-white shadow-md rounded-2xl p-6 hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              📄 Download Invoice
            </h2>
            <p className="text-gray-600">Access your order invoices.</p>
          </Link>

          {/* More actions can be added */}
          {/* Example future widget */}
          {/* <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              🔔 Notifications
            </h2>
            <p className="text-gray-600">You have 3 new updates.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
