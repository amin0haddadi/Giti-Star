import { products } from "@/lib/mock";
import { ProductProps } from "@/types";
import { notFound } from "next/navigation";

const ProductDetailPage = ({ params }: ProductProps) => {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-400">
          {product.name}
        </h1>
        <p className="text-xl text-gray-800 mb-2 flex gap-3">
          قیمت :
          <span className="font-semibold text-lime-500">
            {product.price.toLocaleString()} تومان
          </span>
        </p>
        <p className="font-bold text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
