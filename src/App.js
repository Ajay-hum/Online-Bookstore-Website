import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Categories from './Components/Categories/Categories'
import Trending from './Components/Trending/Trending'
import Deals from './Components/Deals/Deals'
import Booklist from './Components/Booklist/Booklist'
import Wishlist from './Components/Wishlist/Wishlist'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <div id="home">
      <Home/>
    </div>
    <div id="categories">
      <Categories/>
    </div>
    <div id="trending">
      <Trending/>
    </div>
    {/*<Deals/>
    <Booklist/>
    <Wishlist/>
    <Footer/>*/}
    </>
  )
}

export default App