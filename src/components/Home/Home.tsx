import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { CategorieProps } from '../../types';
import ProductList from '../ProductList/ProductList';
import styles from './Home.module.css';

export default function Home() {
  const [categories, setCategories] = useState<CategorieProps[]>([]);
  const [categorieId, setCategorieId] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getData();
  }, []);

  const handleClick = async (id: string) => {
    setCategorieId(id);
  };

  return (
    <div className={ styles.container }>
      <aside>
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
      <section className={ styles.main }>
        <ProductList categorieId={ categorieId } />
      </section>
    </div>
  // </div>
  );
}
