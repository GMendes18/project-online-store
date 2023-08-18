import { ReactNode } from 'react';

export type CategorieProps = {
  id: string;
  name: string;
};

export type ProductProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export type ContextProps = {
  children: ReactNode
};
