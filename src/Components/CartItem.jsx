import React from "react";
import { useCart } from "../CartContext";

const usdToInr = (usd) => `₹${(usd * 83).toLocaleString("en-IN")}`;

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white rounded-xl shadow-sm p-4 border w-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-md bg-gray-50 p-2"
      />

      <div className="flex-1 text-center sm:text-left">
        <h4 className="font-semibold text-lg line-clamp-2">{item.title}</h4>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3">
          <button
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="px-3 py-1 bg-gray-200 rounded-full"
          >
            -
          </button>

          <div className="font-medium">{item.quantity}</div>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-gray-200 rounded-full"
          >
            +
          </button>

          <div className="ml-4 text-lg font-bold">{usdToInr(item.price * item.quantity)}</div>
        </div>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end gap-3 mt-3 sm:mt-0">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
