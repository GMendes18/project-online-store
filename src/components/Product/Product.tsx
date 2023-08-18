import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductCardProps } from '../../types';

export default function Product() {
  const [itemInfo, setItemInfo] = useState({} as ProductCardProps);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getProductById(id as string);
      setItemInfo(data);
    };
    getData();
  }, [id]);

  const { title, thumbnail, price, condition, warranty } = itemInfo;

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
      <button>Adicione ao carrinho</button>
    </div>
  );
}
