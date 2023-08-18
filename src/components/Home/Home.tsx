import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { CategorieProps } from '../../types';
import ProductList from '../ProductList/ProductList';

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
    <>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      {/* Vai ser um menu, lateral, por enquanto vai ficar feio na tela */}
      <div>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
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
      {/* Renderize o componente ProductList */}
      <ProductList categorieId={ categorieId } />
    </>
  );
}
