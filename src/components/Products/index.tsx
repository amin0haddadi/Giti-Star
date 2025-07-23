"use client";
import { products } from "@/lib/mock";
import { Product } from "@/types";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">محصولات</h1>

      <input
        type="text"
        placeholder="جستجوی نام محصول..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link href={`/Products/${product.id}`}>
              <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition hover:scale-110 duration-500 cursor-pointer h-full">
                <h2 className="text-xl font-bold text-gray-500 mb-1">
                  {product.name}
                </h2>
                <p className="text-sky-800">
                  {product.price.toLocaleString()} تومان
                </p>
              </div>
            </Link>
          </li>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            هیچ محصولی یافت نشد.
          </p>
        )}
      </ul>
    </div>
  );
};

export default Products;
