
import React from "react";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/font-awesome/css/font-awesome.min.css";
import{BrowserRouter ,Routes,Route}from"react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Products from "./components/Products.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";




function App() {
  return (
   <>
     {/* <Navbar/>  */}
 
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
     </BrowserRouter>
  </>

    
    
    
  );
}

export default App;
