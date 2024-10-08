import React, { useEffect, useState } from 'react';
import './trending.css';


import { Link } from 'react-scroll'
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images for trending books
import img1 from '../../Asset/Trending/The_Midnight_Library.jpg';
import img2 from '../../Asset/Trending/Project_Hail_Mary,_First_Edition_Cover_(2021).jpg';
import img3 from '../../Asset/Trending/The_Vanishing_Half_(Brit_Bennett).png';
import img4 from '../../Asset/Trending/Klara_and_the_Sun_(Kazuo_Ishiguro).png';
import img5 from '../../Asset/Trending/InvisibleAddieLaRue.jpg';

const trendingBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    image: img1,
    description: 'A novel about the choices that go into a life well lived.',
    price: '$12.99',
    bookingUrl: '/booking',
  },
  {
    id: 2,
    title: 'Project Hail Mary',
    image: img2,
    description: 'A lone astronaut must save Earth from disaster.',
    price: '$14.99',
    bookingUrl: '/booking',
  },
  {
    id: 3,
    title: 'The Vanishing Half',
    image: img3,
    description: 'A multi-generational story about two twin sisters.',
    price: '$11.49',
    bookingUrl: '/booking',
  },
  {
    id: 4,
    title: 'Klara and the Sun',
    image: img4,
    description: 'A story about an artificial friend and the nature of love.',
    price: '$13.49',
    bookingUrl: '/booking',
  },
  {
    id: 5,
    title: 'The Invisible Life of Addie LaRue',
    image: img5,
    description: 'A young woman makes a Faustian bargain to live forever.',
    price: '$15.99',
    bookingUrl: '/booking',
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
          <h2 className="secTitle" data-aos="fade-right" data-aos-duration="2000">📚 Trending Books 📚</h2>
          <p data-aos="fade-right" data-aos-duration="2500">
          Check out the books that our readers can’t get enough of! From thrilling mysteries 
          to heartwarming romances, these titles are flying off the shelves.
          </p>
        </div>

        <div data-aos="fade-up" className="trendingContent grid">
          {displayedBooks.map(({ id, title, image, description, price, bookingUrl}) => (
            <div className="bookCard" key={id}>
              <div className="bookImage">
                <img src={image} alt={title} />
                <div className="overlayInfo">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="price">{price}</span>
                  <Link to={bookingUrl} className='bookButton'>Book</Link>
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

