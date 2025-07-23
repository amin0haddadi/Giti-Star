import { Product } from "@/types";

export const HEADER_ITEMS = ["Home", "ToDoList", "Products"] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "گوشی هوشمند",
    price: 12000000,
    description: "گوشی قدرتمند با پردازنده سریع و دوربین با کیفیت.",
  },
  {
    id: "2",
    name: "لپ‌تاپ",
    price: 35000000,
    description: "لپ‌تاپ مناسب کارهای گرافیکی و برنامه‌نویسی.",
  },
  {
    id: "3",
    name: "هدفون بی‌سیم",
    price: 1800000,
    description: "کیفیت صدای بالا و باتری طولانی‌مدت.",
  },
];
