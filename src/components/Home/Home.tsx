import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { CategorieProps } from '../../types';
import ProductList from '../ProductList/ProductList';
import styles from './Home.module.css';

export default function Home() {
  const [categories, setCategories] = useState<CategorieProps[]>([]);
  const [categorieId, setCategorieId] = useState('');
  const [showInitialMessage, setShowInitialMessage] = useState(true); // Estado para controlar a mensagem inicial

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getData();
  }, []);

  const handleClick = async (id: string) => {
    setCategorieId(id);
    setShowInitialMessage(false); // Ao escolher uma categoria, esconde a mensagem inicial
  };

  return (
    <div className={ styles.container }>
      <aside>
        <p>Categorias</p>
        <hr />
        <div className={ styles.categoryMenu }>
          {categories.map(({ id, name }) => (
            <div key={ id } className={ styles.categoryItem }>
              <label htmlFor={ id } data-testid="category">
                <input
                  className={ styles.categoryInput }
                  type="radio"
                  name="category"
                  id={ id }
                  onClick={ () => handleClick(id) }
                />
                {name}
              </label>
            </div>
          ))}
        </div>
      </aside>
      <main>
        <ProductList categorieId={ categorieId } />
        {showInitialMessage && (
          <div className={ styles.initialMessage }>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
