import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductCardProps, ProductProps } from '../../types';
import UserContext from '../UserContext';
// import styles from './Product.module.css';

export default function Product() {
  const [itemInfo, setItemInfo] = useState({} as ProductCardProps);
  const { cartItems, setCartItems } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getProductById(id as string);
      setItemInfo(data);
    };
    getData();
  }, [id]);

  const { title, thumbnail, price, condition, warranty } = itemInfo;

  const addToCart = (product: ProductProps) => {
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
      <h2 data-testid="product-detail-name">{title}</h2>
      <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
      <p data-testid="product-detail-price">{`R$ ${price}`}</p>
      <p>{`Quantidade Disponivel: ${itemInfo.available_quantity}`}</p>
      <p>{`Condição do produto: ${condition}`}</p>
      <p>{`Garantia: ${warranty}`}</p>
      {' '}
      {/* Talver nao seja sempre em reais(R$) */}
      <button
        onClick={ () => addToCart(itemInfo) }
        data-testid="product-detail-add-to-cart"
      >
        Adicione ao carrinho
      </button>
    </div>
  );
}
