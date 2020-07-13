import React from 'react';

import Header from './components/header';
import Categories from './components/categories';
import Products from './components/products/products';
// import SimpleCart from './components/cart';
import Footer from './components/footer';

import './components/products/products-style.css';


function App() {
  return (
    <>
      <Header />
      <main >
        <Categories className="categories"/>
        <Products />
        {/* <SimpleCart /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
