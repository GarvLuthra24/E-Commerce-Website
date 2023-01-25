import './App.css';
import Navbar from './components/Header'
import React  from 'react';
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (



    <div className="App">
      {/* <h1>amazon clone</h1> */}
  
      
      <BrowserRouter>
      <Navbar />
        <Routes>

        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
