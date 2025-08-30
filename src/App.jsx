import { useEffect, useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
import Footer from './components/footer/Footer'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import ExchangePolicy from './pages/ExchangePolicy'
import SizeGuide from './pages/SizeGuide'
import Model from './model/Model'
import Login from './pages/Login'


function App() {
  const [modelStatus, setModelStatus] = useState(false)
  useEffect(() => {
  const timer = setTimeout(() =>{
    setModelStatus(true)
  }, 3000)
  return () => clearTimeout(timer)
  }, [])


  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    },[pathname])

  }

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/clothing' element={ <ShopCategory category='clothing' /> } />
    <Route path='/shoes' element={ <ShopCategory category='shoes'/> } />
    <Route path='/accessories' element={ <ShopCategory category='accessories' /> } />
    <Route path='/product' element={ <ShopCategory category='all' /> } />
    <Route path='/product/:productId' element={ <Product/> } />
    <Route path='/signup' element={ <SignupPage/> } />
    <Route path='/login' element={ <Login/> } />
    <Route path='/cart' element={ <CartPage/> } />
    <Route path='/blog' element={ <Blog/> } />
    <Route path='/contact' element={ <Contact /> } />
    <Route path='/about' element={ <About /> } />
    <Route path='/return&exchange' element={ <ExchangePolicy /> } />
    <Route path='/sizeguide' element={ <SizeGuide /> } />
    <Route path='/cart' element={ <CartPage /> } />
    </Routes>
    <Footer/>
    <Model modelStatus={modelStatus} setModelStatus={setModelStatus} />
    </BrowserRouter>
    </>
  )
}

export default App
