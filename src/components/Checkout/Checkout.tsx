import React, { useContext } from 'react';
import UserContext from '../UserContext';
import { ProductProps } from '../../types';
import FormCheckout from '../FormCheckout/FormCheckout';

export default function Checkout() {
  const { cartItems } = useContext(UserContext);

  const items = cartItems as ProductProps[];

  return (
    <div style={ { display: 'flex', justifyContent: 'space-evenly' } }>
      <FormCheckout />
      <div>
        <p>Pagamento</p>
        <p>Escolha a forma de pagamento</p>
        <div>
          <p>(icone cartao)Cartão de Crédito</p>
          <p>(icone cartao)Cartão de Débito</p>
          <p>(icone pix) Pix à vista</p>
          <p>(icone boleto)Boleto Bancário à vista</p>
        </div>
      </div>
      <div>
        <p>Resumo do Pedido</p>
        {items.map((item) => (
          <div key={ item.id }>
            <p>{item.title}</p>
            <img src={ item.thumbnail } alt="" />
            <p>{`Quantidade: ${item.quantityCart}`}</p>
            <p>{`Total: ${(item.quantityCart * item.price).toFixed(2)}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
