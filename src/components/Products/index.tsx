import { products } from "@/lib/mock";
import Link from "next/link";

const Products = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">لیست محصولات</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition duration-500"
          >
            <Link href={`/Products/${product.id}`}>
              <div className="cursor-pointer flex justify-between items-center">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sky-700">
                  {product.price.toLocaleString()} تومان
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
