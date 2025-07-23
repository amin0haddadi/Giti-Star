export interface HeaderProps {}

export type Todo = {
  id: string;
  title: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type ProductProps = {
  params: {
    id: string;
  };
};
