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
      <div className={ styles.search }>
        <form onSubmit={ (event) => submit(event) }>
          <input
            className={ styles.input }
            data-testid="query-input"
            autoComplete="off"
            type="text"
            placeholder="Digite o que você procura"
            name="search"
            value={ search }
            onChange={ ({ target }) => handleChange(setSearch, target) }
          />
          <button
            className={ styles.btnSearch }
            data-testid="query-button"
            type="submit"
          >
            <img
              src="src/assets/search.svg"
              alt="search"
            />
          </button>

        </form>
      </div>
      <div className={ styles.title }>
        LOGO
      </div>
      <div className={ styles.cart }>
        <Link to="/cart" data-testid="shopping-cart-button">
          <span
            className={ styles.qntItens }
            data-testid="shopping-cart-size"
          >
            0
          </span>
          <img
            className={ styles.itens }
            src="src/assets/ellipse-2.svg"
            alt="qntItens"
          />
          <img
            className={ styles.icon }
            src="src/assets/cart.svg"
            alt="cart"
          />
        </Link>
      </div>
    </header>
  );
}
