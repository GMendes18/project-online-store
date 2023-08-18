import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductListProps, ProductProps } from '../../types';
import UserContext from '../UserContext';
import { getProductsFromCategoryAndQuery } from '../../services/api';

function ProductList({ categorieId }: ProductListProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const { inputSearch, cartItems, setCartItems } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery(categorieId, inputSearch);
      setProducts(data.results);
      // setLoading(false);
    };
    if (categorieId || inputSearch) getData();
  }, [inputSearch, categorieId]);

  return (
    <div>
      {products.length === 0 ? (
        <p>Nenhum produto foi encontrado</p>
      ) : (
        <div>
          {products.map((product) => {
            const { id, title, thumbnail, price } = product;
            return (
              <div key={ id } data-testid="product">
                <Link to={ `/product/${id}` } data-testid="product-detail-link">
                  {' '}
                  {/* Verificar se o link vai ficar aqui mesmo ou se fica melhor em outro lugar */}
                  <h2>{title}</h2>
                  <img src={ thumbnail } alt={ title } />
                </Link>
                <p>{`Preço: ${price.toFixed(2)}`}</p>
                <button
                  data-testid="product-add-to-cart"
                  onClick={ () => setCartItems([...cartItems, product]) }
                >
                  Adicionar ao Carrinho
                </button>
                {' '}
                {/* posteriormente pode virar um símbolo de mais com um carrinho, ou ter outro texto */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
