import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductListProps, ProductProps } from '../../types';
import UserContext from '../UserContext';
import { getProductsFromCategoryAndQuery } from '../../services/api';
// import styles from './ProductList.module.css';

function ProductList({ categorieId }: ProductListProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  // const [loading, setLoading] = useState(true);

  const { inputSearch, cartItems, setCartItems } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery(categorieId, inputSearch);
      setProducts(data.results);
      // setLoading(false);
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
                  onClick={ () => addItem(product) }
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
