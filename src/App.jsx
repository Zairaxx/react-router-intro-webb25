import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'


function App() {
  // HOC - Higher Order Component
  return (
    <BrowserRouter>

      <Navigation/>

      {/* Våra olika undersidor/URL:er */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
