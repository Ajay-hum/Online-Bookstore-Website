import React, { useState, useEffect } from 'react';
import './categories.css'

import { mockBooks } from '../../storage.js'

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fiction');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks)[selectedCategory]);
    } else {
      setBooks(mockBooks[selectedCategory]);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('books', JSON.stringify(mockBooks));
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };


  return (
    <div className="categorySection">
      <h2>Select a Category</h2>
      <div className="categories">
        {Object.keys(mockBooks).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="books">
        <h3>Books in {selectedCategory}</h3>
        <ul>
          {books.map((book, index) => (
            <li key={index} onClick={() => handleBookClick(book)}>
              {book.title}
            </li>
          ))}
        </ul>
      </div>
      {selectedBook && (
        <div className="book-details">
          <h4>{selectedBook.title}</h4>
          <img src={selectedBook.image} alt={selectedBook.title} />
          <p>{selectedBook.description}</p>
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Categories