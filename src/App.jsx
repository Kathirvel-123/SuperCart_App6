import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import { useCart } from "./CartContext"; 

function App() {
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="p-4 bg-black text-white flex justify-between items-center">
        <Link className="text-2xl" to="/">SuperCart</Link>

        <Link to="/cart" className="relative">
          <i className="fa-solid fa-cart-shopping text-xl"></i>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
