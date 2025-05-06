import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function OrderConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    if (!order) {
      // If no order in state, redirect back to home
      navigate("/");
    }
  }, [order, navigate]);

  if (!order) return null;

  const { customer, items } = order;

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-green-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Thank You for Your Order!
        </h2>
        <p className="mb-6 text-gray-700">
          Your order has been placed successfully. We’ll contact you soon for delivery details.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Shipping Info</h3>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Address:</strong> {customer.address}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <span>{item.name}</span>
                </div>
                <span className="font-semibold text-blue-600">₹{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-right font-bold text-xl">
            Total: ₹{getTotal()}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
