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
  inputSearch: string
  toggleSearch: (searchValue: string) => void
};

export type ProductListProps = {
  categorieId: string
};
