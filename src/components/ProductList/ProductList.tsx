import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductListProps, ProductProps } from '../../types';
import UserContext from '../UserContext';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import styles from './ProductList.module.css';

export default function ProductList({ categorieId }: ProductListProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [, setLoading] = useState(true);

  const { inputSearch, cartItems, setCartItems } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery(categorieId, inputSearch);
      setProducts(data.results);
      setLoading(false);
    };
    if (categorieId || inputSearch) getData();
  }, [inputSearch, categorieId]);

  const addItem = (product: ProductProps) => {
    const productItem = cartItems.find((item: ProductProps) => item.id === product.id);

    if (!productItem) {
      setCartItems([...cartItems, { ...product, quantityCart: 1 }]);
    } else {
      const newArray = cartItems.map((item: ProductProps) => {
        if (item.id === product.id) item.quantityCart += 1;
        return item;
      });
      setCartItems(newArray);
    }
  };

  return (
    <div>
      {products.length === 0 ? (
        <p className={ styles.text }>
          VOCÊ AINDA NÃO REALIZOU UMA BUSCA
        </p>
      ) : (
        <div className={ styles.products }>
          {products.map((product) => {
            const { id, title, thumbnail, price, shipping } = product;
            // Verifica se o produto tem frete grátis
            const hasFreeShipping = shipping && shipping.free_shipping;
            return (

              <div
                className={ styles.cards }
                key={ id }
                data-testid="product"
              >
                <Link to={ `/product/${id}` } data-testid="product-detail-link">
                  <img src={ thumbnail } alt={ title } />
                  <h4>{title}</h4>
                </Link>
                <p>{`R$ ${price.toFixed(2)}`}</p>
                {hasFreeShipping && (
                  <h4 data-testid="free-shipping">Frete Grátis!</h4>
                )}
                <button
                  data-testid="product-add-to-cart"
                  onClick={ () => addItem(product) }
                >
                  Adicionar ao Carrinho
                </button>
              </div>

            );
          })}
        </div>
      )}

    </div>
  );
}
