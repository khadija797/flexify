import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/placeorder/PlaceOrder'
import LoginPopup from './components/loginpopup/LoginPopup'
import Footer from './components/footer/Footer'
import ProductDisplay from './components/product-display/ProductDisplay'
import ProductDisplayAdult from './components/product-display-adult/ProductDisplayAdult'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/shop-adults-costumes' element={<ProductDisplayAdult />} />
          <Route path='/shop-kids-costumes' element={<ProductDisplay />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
