import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleChange } from '../../utils/utils';

export default function Header() {
  const [search, setSearch] = useState('');

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (!search) return;

    // navigate(`/search?q=${search}`);
  };

  return (
    <header>
      <form action="" onSubmit={(event) => submit(event)}>
        <input
          autoComplete="off"
          type="text"
          placeholder="Pesquisar"
          name="search"
          value={search}
          onChange={({ target }) => handleChange(setSearch, target)}
        />
        <Link to="/cart" data-testid="shopping-cart-button">
          <button>Ir para o carrinho</button>
        </Link>
        <button>Pesquisar</button>

      </form>
    </header>
  );
}
