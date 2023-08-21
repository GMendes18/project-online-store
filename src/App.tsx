import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import styles from './App.module.css';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Layout from './components/Layout/Layout';
import UserContext from './components/UserContext';
import Product from './components/Product/Product';
import { useLocalStorage } from './LocalStorage';
import Checkout from './components/Checkout/Checkout';
// import { UserInfoProps } from './types';
import { user } from './utils/utils';

function App() {
  const [inputSearch, setInputSearch] = useState('');
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [userInfo, setUserInfo] = useState(user);

  return (
    <UserContext.Provider
      value={
        { inputSearch, setInputSearch, cartItems, setCartItems, userInfo, setUserInfo }
      }
    >
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/cart" element={ <ShoppingCart /> } />
          <Route path="/cart/checkout" element={ <Checkout /> } />
          <Route path="/product/:id" element={ <Product /> } />
        </Route>
        {/* <Route path="/*" element={ <NotFound /> } /> Acredito que ainda vamos implementar esse elemento */}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
