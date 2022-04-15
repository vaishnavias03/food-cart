import './App.css';
import { useState} from "react";
import ListData from './components/ListData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from './components/Cart';
import { CartItemsContext } from './CartItemsContext';



function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <CartItemsContext.Provider value={{cartItems, setCartItems}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<ListData />}/>
                <Route path="cart" element={<Cart />}/>
              </Route>
            </Routes>
          </BrowserRouter>
    </CartItemsContext.Provider>
  );
}

export default App;
