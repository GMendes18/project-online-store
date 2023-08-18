import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Layout from './components/Layout/Layout';
import UserContext from './components/UserContext';

function App() {
  const [inputSearch, setInputSearch] = useState('');

  const toggleSearch = (searchValue: string) => {
    setInputSearch(searchValue);
  };

  return (
    <UserContext.Provider value={ { inputSearch, toggleSearch } }>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/cart" element={ <ShoppingCart /> } />
        </Route>
        {/* <Route path="/*" element={ <NotFound /> } /> Acredito que ainda vamos implementar esse elemento */}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
