import { useContext, useEffect, useState } from 'react';
import { ProductProps } from '../../types';
import UserContext from '../UserContext';
import { getProductsFromCategoryAndQuery } from '../../services/api';

function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  // const [loading, setLoading] = useState(true);

  const { inputSearch } = useContext(UserContext); // falta tipar

  useEffect(() => {
    const getData = async () => {
      const data = await getProductsFromCategoryAndQuery('', inputSearch);
      setProducts(data.results);
      // setLoading(false);
    };
    getData();
  }, [inputSearch]);

  return (
    <div>
      {products.length === 0 ? (
        <p>Nenhum produto foi encontrado</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={ product.id } data-testid="product">
              <h2>{product.title}</h2>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>
                Preço:
                {' '}
                {product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
