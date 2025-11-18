import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {

  const [products,setProducts] = useState([
  {
    id: 1,
    namn: "Trådlösa Hörlurar",
    beskrivning: "Bekväma hörlurar med brusreducering och lång batteritid.",
    pris: 899
  },
  {
    id: 2,
    namn: "Ergonomiskt Tangentbord",
    beskrivning: "Tyst och bekvämt tangentbord utformat för långa arbetspass.",
    pris: 749
  },
  {
    id: 3,
    namn: "4K Skärm",
    beskrivning: "27-tums 4K-skärm med hög färgprecision.",
    pris: 3199
  },
  {
    id: 4,
    namn: "USB-C Dockningsstation",
    beskrivning: "Flera portar för laddning och anslutning av tillbehör.",
    pris: 1290
  },
  {
    id: 5,
    namn: "Bluetooth Högtalare",
    beskrivning: "Kraftfull portabel högtalare med djup bas.",
    pris: 599
  },
  {
    id: 6,
    namn: "Webbkamera HD",
    beskrivning: "1080p webbkamera med automatisk ljusjustering.",
    pris: 449
  }
])

  return (
    <BrowserRouter>

      <Navigation/>

      {/* Våra olika undersidor/URL:er */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage products={products}/>}/>
        <Route path='/productDetails/:id' element={<ProductDetailsPage products={products}/>}/>
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
