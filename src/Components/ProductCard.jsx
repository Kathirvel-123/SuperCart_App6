import React from "react";
import { useCart } from "../CartContext";

const usdToInr = (usd) => `₹${(usd * 83).toLocaleString("en-IN")}`;

export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const inCart = cart.some((c) => c.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-32 sm:h-40 md:h-44 object-contain"
        />
      </div>

      <div className="mt-3 sm:mt-4">
        <h3 className="text-md font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-3">
          <div className="text-lg font-bold">{usdToInr(product.price)}</div>

          {inCart ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              Remove
            </button>
          ) : (
            
            <button
              onClick={() => addToCart(product)}
              className="px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
