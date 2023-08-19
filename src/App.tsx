import { Route, Routes } from 'react-router-dom';
import './index.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Layout from './components/Layout/Layout';
import UserContext from './components/UserContext';
import Product from './components/Product/Product';
import { useLocalStorage } from './LocalStorage';

function App() {
  const [inputSearch, setInputSearch] = useState('');
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

  return (
    <UserContext.Provider
      value={ { inputSearch, setInputSearch, cartItems, setCartItems } }
    >
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/cart" element={ <ShoppingCart /> } />
          <Route path="/product/:id" element={ <Product /> } />
        </Route>
        {/* <Route path="/*" element={ <NotFound /> } /> Acredito que ainda vamos implementar esse elemento */}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
