import React, { useContext } from 'react';
import { ProductProps } from '../../types';
import UserContext from '../UserContext';
// import styles from './ItemCart.module.css';

export default function ItemCart() {
  const { cartItems, setCartItems } = useContext(UserContext);

  const deleteItem = (id:string) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setCartItems(deletedItem);
  };

  const addQuantity = (item: ProductProps) => {
    const newArray = cartItems.map((cardItem: ProductProps) => {
      if (cardItem.id === item.id) cardItem.quantityCart += 1;
      return cardItem;
    });
    setCartItems(newArray);
  };

  const removeQuantity = (item: ProductProps) => {
    if (item.quantityCart > 1) {
      const newArray = cartItems.map((cardItem: ProductProps) => {
        if (cardItem.id === item.id) cardItem.quantityCart -= 1;
        return cardItem;
      });
      setCartItems(newArray);
    } /* else deleteItem(item.id); */
  };

  const items = cartItems as ProductProps[];

  return (
    <div>
      {items.map((item) => {
        const { id, title, thumbnail, price, quantityCart } = item;

        return (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <img
              src={ thumbnail }
              alt={ title }
              data-testid="product-detail-image"
            />

            <div>
              <button
                onClick={ () => removeQuantity(item) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {quantityCart}
              </p>
              <button
                onClick={ () => addQuantity(item) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={ () => deleteItem(id) }
              data-testid="remove-product"
            >
              Lixeira
            </button>
            <p>{`Valor total: ${(quantityCart * price).toFixed(2)}`}</p>
          </div>
        );
      })}
    </div>
  );
}
