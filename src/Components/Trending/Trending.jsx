import React, { useEffect, useState } from 'react';
import './trending.css';


import { Link } from 'react-scroll'
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images for trending books
import img1 from '../../Asset/Trending/img_1.jpeg';
import img2 from '../../Asset/Trending/img_2.jpg';
import img3 from '../../Asset/Trending/img_3.jpg';
import img4 from '../../Asset/Trending/img_4.jpg';
import img5 from '../../Asset/Trending/img_6.jpg';

const trendingBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    image: img1,
    description: 'A novel about the choices that go into a life well lived.',
    price: '$12.99',
    bookingUrl: '/booking/1',
  },
  {
    id: 2,
    title: 'Project Hail Mary',
    image: img2,
    description: 'A lone astronaut must save Earth from disaster.',
    price: '$14.99',
    bookingUrl: '/booking/2',
  },
  {
    id: 3,
    title: 'The Vanishing Half',
    image: img3,
    description: 'A multi-generational story about two twin sisters.',
    price: '$11.49',
    bookingUrl: '/booking/3',
  },
  {
    id: 4,
    title: 'Klara and the Sun',
    image: img4,
    description: 'A story about an artificial friend and the nature of love.',
    price: '$13.49',
    bookingUrl: '/booking/4',
  },
  {
    id: 5,
    title: 'The Invisible Life of Addie LaRue',
    image: img5,
    description: 'A young woman makes a Faustian bargain to live forever.',
    price: '$15.99',
    bookingUrl: '/booking/5',
  },
  // Add more books as needed
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingBooks.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const displayedBooks = [
    ...trendingBooks.slice(currentIndex, currentIndex + itemsToShow),
    ...trendingBooks.slice(0, Math.max(0, currentIndex + itemsToShow - trendingBooks.length)),
  ];

  return (
    <section className='trending section container'>
      <div className="secContainer">
        <div className="secHeader">
          <h2 className="secTitle" data-aos="fade-right">📚 Trending Books 📚</h2>
        </div>

        <div data-aos="fade-up" className="trendingContent grid">
          {displayedBooks.map(({ id, title, image, description, price, bookingUrl }) => (
            <div className="bookCard" key={id}>
              <div className="bookImage">
                <img src={image} alt={title} />
                <div className="overlayInfo">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="price">{price}</span>
                  <Link to="#" className='bookButton'>Book</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;

