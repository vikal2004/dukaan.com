import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";

const dummyStoreProducts = {
  "store-1": [
    {
      id: "prod-1",
      name: "Denim Jacket",
      price: 2499,
      image: "https://source.unsplash.com/random/400x400?jacket",
    },
    {
      id: "prod-2",
      name: "Graphic T-Shirt",
      price: 799,
      image: "https://source.unsplash.com/random/400x400?tshirt",
    },
  ],
  "store-2": [
    {
      id: "prod-3",
      name: "Wireless Earbuds",
      price: 3999,
      image: "https://source.unsplash.com/random/400x400?earbuds",
    },
    {
      id: "prod-4",
      name: "Smartwatch",
      price: 6999,
      image: "https://source.unsplash.com/random/400x400?smartwatch",
    },
  ],
  "store-3": [
    {
      id: "prod-5",
      name: "The Alchemist",
      price: 499,
      image: "https://source.unsplash.com/random/400x400?book",
    },
    {
      id: "prod-6",
      name: "Atomic Habits",
      price: 599,
      image: "https://source.unsplash.com/random/400x400?reading",
    },
  ],
};

export default function StorefrontPage() {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const products = dummyStoreProducts[storeId] || [];

  return (
    <>
    <Navbar />
  
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Products from {storeId.replace("-", " ").toUpperCase()}
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                  <p className="text-blue-600 font-bold mb-3">₹{product.price}</p>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
