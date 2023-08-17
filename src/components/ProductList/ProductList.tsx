import React, { useState } from 'react';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductProps } from '../../types';

function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([]); // Defina o tipo aqui
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const data = await getProductsFromCategoryAndQuery('', query);
    setProducts(data.results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite sua busca"
        value={ query }
        onChange={ (e) => setQuery(e.target.value) }
        data-testid="query-input"
      />
      <button onClick={ handleSearch } data-testid="query-button">
        Buscar
      </button>

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
