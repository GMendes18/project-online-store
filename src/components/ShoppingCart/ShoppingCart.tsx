import { useContext } from 'react';
import UserContext from '../UserContext';
import { ProductProps } from '../../types';
import ItemCart from '../ItemCart/ItemCart';

function ShoppingCart() {
  const { cartItems } = useContext(UserContext);

  const items = cartItems as ProductProps[];

  return (
    <div>
      {!items.length
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : (
          <ItemCart />
        )}
    </div>
  );
}
export default ShoppingCart;
