import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="homeSection">
      <div className="content">
        <h3>His Life will forever be Changed</h3>
        <p>by Anonymous</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="orderButton">Order Now</button>
      </div>
      <div className="imageContainer">
        <img src="path/to/your/book-cover.jpg" alt="Book Cover" className="bookCover" />
        <div className="related-books">
          <div className="related-book">
            <img src="path/to/related-book-1.jpg" alt="Related Book 1" />
          </div>
          <div className="related-book">
            <img src="path/to/related-book-2.jpg" alt="Related Book 2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home