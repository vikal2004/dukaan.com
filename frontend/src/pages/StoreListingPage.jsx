import { useNavigate } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";

const stores = [
  {
    id: "store-1",
    name: "Urban Threads",
    description: "Trendy fashion for everyday style.",
    image: "https://source.unsplash.com/random/400x300?store,clothing",
  },
  {
    id: "store-2",
    name: "Gadget World",
    description: "Latest gadgets and electronics.",
    image: "https://source.unsplash.com/random/400x300?store,electronics",
  },
  {
    id: "store-3",
    name: "Book Haven",
    description: "A paradise for book lovers.",
    image: "https://source.unsplash.com/random/400x300?store,books",
  },
];

export default function StoreListingPage() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
  
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Stores</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
                <p className="text-gray-600 mb-4">{store.description}</p>
                <button
                  onClick={() => navigate(`/stores/${store.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                >
                  Visit Store
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
