import React from 'react'
import './home.css'

import { Link } from "react-scroll"
import img1 from '../../Asset/Trending/The_Midnight_Library.jpg'

const Home = () => {
  return (
    <section className="homeSection">
      <div className="content">
        <h3>Welcome to G.S. Books: Your Gateway to Endless Adventures!</h3>
        <p>Discover, Read, and Enjoy the Best Books from Around the World.</p>
        <Link to="categories" smooth={true} duration={500} className="orderButton">Browse Our Collection</Link>
      </div>
      <div className="imageContainer">
        <img src={img1} alt="Book Cover" className="bookCover" />
      </div>
    </section>
  )
}

export default Home