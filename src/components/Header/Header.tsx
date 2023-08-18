import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { handleChange } from '../../utils/utils';

// import { ProductProps } from '../../types';

import UserContext from '../UserContext';

export default function Header() {
  const [search, setSearch] = useState('');
  /*  const [products, setProducts] = useState<ProductProps[]>([]); // Defina o tipo aqui */

  const { toggleSearch } = useContext(UserContext); // falta tipar

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (!search) return;
    // navigate(`/search?q=${search}`);
    toggleSearch(search);
  };

  return (

    <header>
      <form onSubmit={ (event) => submit(event) }>
        <input
          data-testid="query-input"
          autoComplete="off"
          type="text"
          placeholder="Pesquisar"
          name="search"
          value={ search }
          onChange={ ({ target }) => handleChange(setSearch, target) }
        />
        <button type="submit" data-testid="query-button">Pesquisar</button>
      </form>
      <Link to="/cart" data-testid="shopping-cart-button">
        Ir para o carrinho
        {' '}
        {/* Acredito que deixar esse texto de em um botão fica redundante, pois o Link ja é um clicavel, entao ficaria um clicavel dentro de outro clicavel, ficaria dois elementos para executar a mesma função */}
      </Link>
    </header>
  );
}
