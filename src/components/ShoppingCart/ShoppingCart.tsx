import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { ProductProps } from '../../types';
import ItemCart from '../ItemCart/ItemCart';
import { totalPrice } from '../../utils/utils';
// import styles from './ShoppingCart.module.css';

function ShoppingCart() {
  const { cartItems } = useContext(UserContext);

  const items = cartItems as ProductProps[];
  return (
    <div style={ { display: 'flex', justifyContent: 'space-evenly' } }>
      {/* estilização provisoria, apagar esse style depois */}

      {!items.length
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : (
          <>
            {/* Coloquei esses dois dentro de uma div para deixar um do lado do outro posteriormente, so dar um display flex no pai dele, que vai ser essa div da linha 13 */}
            <div>
              <ItemCart />
            </div>
            <div>
              <p>Resumo do pedido</p>
              <p>Subtotal: </p>
              <p>Entrega: R$0,00</p>
              {/* Tentar entender depois como funciona a logica pra colocar o frete, tem uma chave 'shipping' dentro do objeto que diz se o frete vai ser gratis ou nao, por enquanto vou deixar o frete como um valor fixo caso nao tenha o frete gratas */}
              <p>{`Total: ${totalPrice(items)}`}</p>
              <Link
                to="/cart/checkout"
                data-testid="checkout-products"
              >
                Finalizar Compra
              </Link>
            </div>
          </>
        )}
    </div>
  );
}
export default ShoppingCart;
