import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { getCategories } from '../../services/api';
import { CategorieProps } from '../../types';

export default function Home() {
  const [categories, setCategories] = useState<CategorieProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* Vai ser um menu, lateral, por enquanto vai ficar feio na tela */}
        {categories.map(({ id, name }) => (
          <div key={id}>
            <label htmlFor={id} data-testid="category">
              <input type="radio" name={name} id={id} />
              {name}
            </label>

          </div>
        ))}
      </main>

    </>

  );
}
