import Products from "@/components/Products";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "صفحه محصولات"
};

const ProductsPage = () => {
  return <Products />;
};

export default ProductsPage;
