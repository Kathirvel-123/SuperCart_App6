import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const normalized = data.map((p) => ({ ...p, quantity: p.quantity ?? 1 }));
        setProducts(normalized);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-3 sm:px-6 py-4">
      <div className="p-6 bg-gray-100 w-full overflow-x-hidden">
        <h1 className="text-3xl text-gray-800 font-bold mb-6">Products</h1>

        {loading ? (
          <div className="text-center py-20">Loading products…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
