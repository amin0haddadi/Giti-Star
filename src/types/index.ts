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

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};
