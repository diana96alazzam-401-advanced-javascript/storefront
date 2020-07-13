import React from 'react';

import Header from './components/header';
import Categories from './components/categories';
import Products from './components/products/products';
import Footer from './components/footer';

import './components/products/products-style.css';


function App() {
  return (
    <>
      <Header />
      <main >
        <Categories className="categories"/>
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
