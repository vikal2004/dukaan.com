import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/landingpage/Navbar";

// Dummy product database
const allProducts = {
  "prod-1": {
    id: "prod-1",
    name: "Denim Jacket",
    price: 2499,
    description: "Premium quality denim jacket for everyday style.",
    image: "https://source.unsplash.com/random/500x500?jacket",
  },
  "prod-2": {
    id: "prod-2",
    name: "Graphic T-Shirt",
    price: 799,
    description: "Trendy graphic tee made with 100% cotton.",
    image: "https://source.unsplash.com/random/500x500?tshirt",
  },
  "prod-3": {
    id: "prod-3",
    name: "Wireless Earbuds",
    price: 3999,
    description: "High-quality sound with noise cancellation.",
    image: "https://source.unsplash.com/random/500x500?earbuds",
  },
  // Add more as needed
};

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = allProducts[productId];
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading product...
      </div>
    );
  }

  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:flex gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-xl object-cover"
        />
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-blue-600 text-xl font-semibold mb-2">
            ₹{product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={addToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
