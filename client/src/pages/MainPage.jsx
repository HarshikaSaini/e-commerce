import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './login/LoginPage.jsx'
import Product from "./product/Product.jsx"
import RegisterPage from './login/RegisterPage.jsx'
import CartPage from './cart/CartPage.jsx'
import ProductDetail from './product/ProductDetail.jsx'

const Main = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/detail/:id" element={<ProductDetail/>}/> 
      </Routes>
   
  )
}

export default Main