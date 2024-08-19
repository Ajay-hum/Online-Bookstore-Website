import React, { useState, useEffect } from 'react'
import './trending.css'

import { trendingBooks } from '../../storage.js'

const Trending = () => {
  const trending = trendingBooks; // Access the Trending books
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, [trending.length]);

  const displayedBooks = [
    ...trending.slice(currentIndex, currentIndex + itemsToShow),
    ...trending.slice(0, Math.max(0, currentIndex + itemsToShow - trending.length)),
  ];

  return (
    <div className="trendingSection">
      <h2>Trending Books</h2>
      <div className="trendingBooks">
        {displayedBooks.map((book, index) => (
          <div className="bookCard" key={index}>
            <img src={book.image} alt={book.title} className="bookCover" /> {/* Use book.image instead of book.cover */}
            <div className="overlay">
              <div className="overlayContent">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending;