import React, { useState } from 'react';
import './booklist.css';

import { Link } from 'react-scroll'
import books from '../../books.json';

const BookList = () => {
  const [visibleBooks, setVisibleBooks] = useState(10); // Initially show 10 books

  const handleViewMore = () => {
    setVisibleBooks((prev) => prev + 10); // Show 10 more books when clicked
  };

  return (
    <section className="bookListingsSection">
      <div className="secHeader">
        <h2 className="secTitle">All Books</h2>
      </div>
      <div className="bookListings">
        {books.slice(0, visibleBooks).map(({ title, image, description, author, price, bookingUrl }, index) => (
          <div className="bookCard" key={index}>
            <img src={image} alt={title} className="bookCover" />
            <div className="bookDetails">
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="author">Author: {author}</p>
              <p className="price">{price}</p>
              <Link to="#" className='bookButton'>Book</Link> {/* Booking button */}
            </div>
          </div>
        ))}
      </div>
      {visibleBooks < books.length && ( // Show View More button if there are more books
        <button onClick={handleViewMore} className="viewMoreButton">View More</button>
      )}
    </section>
  );
}

export default BookList;


