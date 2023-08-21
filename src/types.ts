export type CategorieProps = {
  id: string;
  name: string;
};

export type ProductProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  quantityCart: number
  available_quantity: number
};

export type ProductCardProps = {
  title: string;
  thumbnail: string;
  price: number;
  available_quantity: number
  condition: string;
  warranty: string
};

export type ContextProps = {
  inputSearch: string
  // toggleSearch: (searchValue: string) => void
  setInputSearch: any,
  cartItems: any,
  setCartItems: any
  userInfo: any,
  setUserInfo: any
};

export type ProductListProps = {
  categorieId: string
};

export type UserInfoProps = {
  name: string
  email: string
  cpf: string
  phone: string
  cep: string
  address: string
  payment: string
};
