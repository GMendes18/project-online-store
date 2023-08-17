import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleChange } from '../../utils/utils';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductProps } from '../../types';
import ProductList from '../ProductList/ProductList'; // Importar o componente

export default function Header() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<ProductProps[]>([]); // Defina o tipo aqui

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = await getProductsFromCategoryAndQuery('', search);
    setProducts(data.results);
  };

  return (

    <>
      <header>
        <form onSubmit={ handleSearch }>
          <input
            data-testid="query-input"
            autoComplete="off"
            type="text"
            placeholder="Pesquisar"
            name="search"
            value={ search }
            onChange={ ({ target }) => handleChange(setSearch, target) }
          />
          <Link to="/cart" data-testid="shopping-cart-button">
            <button>Ir para o carrinho</button>
          </Link>
          <button type="submit" data-testid="query-button">Pesquisar</button>
        </form>
      </header>

      <ProductList products={ products } />
      {' '}
      {/* Renderizar a lista de produtos aqui */}
    </>
  );
}
