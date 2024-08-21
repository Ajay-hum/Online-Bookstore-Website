import React from 'react'
import './home.css'

import img1 from '../../Asset/Trending/img_1.jpeg'

const Home = () => {
  return (
    <section className="homeSection">
      <div className="content">
        <h3>The Midnight Library</h3>
        <p>by Anonymous</p>
        <p>A novel about the choices that go into a life well lived.</p>
        <button className="orderButton">Order Now</button>
      </div>
      <div className="imageContainer">
        <img src={img1} alt="Book Cover" className="bookCover" />
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