import React from 'react';
import './app.css';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Categories from './Components/Categories/Categories'
import Trending from './Components/Trending/Trending'
import Deals from './Components/Deals/Deals'
import Booklist from './Components/Booklist/Booklist'
import Wishlist from './Components/Wishlist/Wishlist'
import Footer from './Components/Footer/Footer'
import Booking from './Components/Booking/Booking'; 


const App = () => {
  return (
    <Router>
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
      <div id="deals">
        <Deals/>
      </div>
      <div id="booklist">
        <Booklist/>
      </div>
      {/*<Wishlist/>*/}
      <Footer/>

      {/*Wrap the Route in Routes*/}
      <Routes>
        <Route path="/booking" element={<Booking />} /> {/* Add Booking route */}
      </Routes>
    </Router>
  )
}

export default App