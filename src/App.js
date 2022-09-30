import React, { useState } from 'react';
import Cart from './components/Carts/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  }
  
  const hideCartHandler = () => {
    setIsCartVisible(false);
  }

  return (
    <CartProvider>
      {/* using useState in App.js file because it's for render the Cart */}
      {isCartVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
