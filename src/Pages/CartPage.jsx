import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, discountedPrice } = useCart();
  const toINR = (usd) => Math.round(usd * 83);

  return (
    <div className="min-h-screen bg-gray-100 px-3 sm:px-6 py-4">
      <h1 className="text-2xl text-gray-800 font-bold mb-6">My Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md w-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt="empty"
                className="w-32 opacity-70 mb-4"
              />
              <p className="text-gray-600 text-lg mb-4">Your cart is empty!</p>

              <Link
                to="/"
                className="bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border-b gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1 px-4">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">₹{toINR(item.price)}</p>
                  <p className="text-sm text-pink-600 font-semibold">×{item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-300 px-2 rounded"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    className="bg-gray-300 px-2 rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:scale-95 transition w-full md:w-auto"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md h-fit w-full">
          <h2 className="text-xl font-semibold mb-4">Price Summary</h2>

          <p className="text-gray-700 mb-2">
            Total Price: <span className="font-bold">₹{toINR(totalPrice)}</span>
          </p>

          <hr className="my-2" />

          <p className="text-green-600 font-semibold mb-4">
            Discount (10% off): ₹{toINR(discountedPrice)}
          </p>

          <button className="bg-pink-600 w-full text-white font-bold py-2 rounded-lg hover:bg-pink-700">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
