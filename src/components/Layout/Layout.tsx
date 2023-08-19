import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import styles from './Home.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
