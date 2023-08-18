import { useContext, useState } from 'react';
import UserContext from '../UserContext';
import { ProductProps } from '../../types';

function ShoppingCart() {
  // const [allItems, setAllItems] = useState([]);
  const { cartItems } = useContext(UserContext);

  const items = cartItems as ProductProps[];
  // console.log(items);

  return (
    <div>
      {!items.length
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : (
          <>
            {items.map(({ id, title, thumbnail }, index) => {
              // if (allItems.filter((item) => item === id).length < 1) {
              //   setAllItems([...allItems, id]);
              return (
                <div key={ id + index }>
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <img
                    src={ thumbnail }
                    alt={ title }
                    data-testid="product-detail-image"
                  />
                  <p
                    data-testid="shopping-cart-product-quantity"
                  >
                    {items.filter((item) => item.id === id).length}
                  </p>
                </div>
              );
              // }
              // return (
              //   null
              // );
            })}
          </>
        )}
    </div>
  );
}
export default ShoppingCart;
