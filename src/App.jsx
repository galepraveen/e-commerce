import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Products from './components/Products';
import SingleProducts from './components/SingleProducts';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/single_product/:id' element={<SingleProducts />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<Error />}> </Route>
      </Routes>
    </Router>
  )
}

export default App

