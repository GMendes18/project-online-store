import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { handleChange } from '../../utils/utils';
import styles from './Header.module.css';
import UserContext from '../UserContext';

export default function Header() {
  const [search, setSearch] = useState('');

  const { setInputSearch } = useContext(UserContext);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (!search) return;
    // navigate(`/search?q=${search}`);
    setInputSearch(search);
  };

  return (

    <header className={ styles.container }>
      <div className={ styles.title }>
        LOGO
      </div>
      <div className={ styles.cart }>
        <Link to="/cart" data-testid="shopping-cart-button">
          Ir para o carrinho
          {' '}
          {/* Acredito que deixar esse texto de em um botão fica redundante, pois o Link ja é um clicavel, entao ficaria um clicavel dentro de outro clicavel, ficaria dois elementos para executar a mesma função */}
        </Link>
      </div>
      <div className={ styles.search }>
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
      </div>
      <div className={ styles.initialMessage }>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>

    </header>
  );
}
