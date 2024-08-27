import React, { useState, useEffect } from 'react';
import './categories.css';

import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

//Importing images to use------------------>
import img1 from '../../Asset/Fiction/The_Great_Gatsby_Cover_1925_Retouched.jpg'
import img2 from '../../Asset/Fiction/To_Kill_a_Mockingbird_(first_edition_cover) (1).jpg'
import img3 from '../../Asset/Fiction/1984_first_edition_cover.jpg'
import img4 from '../../Asset/Fiction/PrideAndPrejudiceTitlePage.jpg'
import img5 from '../../Asset/Fiction/The_Catcher_in_the_Rye_(1951,_first_edition_cover).jpg'
import img6 from '../../Asset/Fiction/TheAlchemist.jpg'
import img7 from '../../Asset/Fiction/The-road.jpg'
import img8 from '../../Asset/Non-Fiction/sapiens.jpg'
import img9 from '../../Asset/Non-Fiction/Educated_(Tara_Westover).png'
import img10 from '../../Asset/Non-Fiction/Becoming_(Michelle_Obama_book).jpg'
import img11 from '../../Asset/Non-Fiction/The_Immortal_Life_Henrietta_Lacks_(cover).jpg'
import img12 from '../../Asset/Non-Fiction/Born_a_Crime_by_Trevor_Noah_(book_cover).jpg'
import img13 from '../../Asset/Non-Fiction/TheBodyKeepstheScore.jpg'
import img14 from '../../Asset/Non-Fiction/The Wright Brothers.jpg'
import img15 from '../../Asset/Non-Fiction/Outliers_(book_cover).png'
import img16 from '../../Asset/Mystery/Gone_Girl_(Flynn_novel).jpg'
import img17 from '../../Asset/Mystery/Thegirlwiththedragontattoo.jpg'
import img18 from '../../Asset/Mystery/DaVinciCode.jpg'
import img19 from '../../Asset/Mystery/Big_Little_Lies_Cover.jpg'
import img20 from '../../Asset/Mystery/The_Woman_in_the_Window.jpg'
import img21 from '../../Asset/Mystery/The_Silent_Patient_early_2019_UK_edition.png'
import img22 from '../../Asset/Mystery/In_the_Woods_cover.jpg'
import img23 from "../../Asset/Mystery/TheCuckoo'sCalling(first_UK_edition)cover.jpg"
import img24 from '../../Asset/History/The Wright Brothers.jpg'
import img25 from '../../Asset/History/Unbroken_by_Laura_Hillenbrand_(cover).jpg'
import img26 from '../../Asset/History/The_Immortal_Life_Henrietta_Lacks_(cover).jpg'
import img27 from '../../Asset/History/1776.jpg'
import img28 from '../../Asset/History/Devil In the White city.jpg'
import img29 from '../../Asset/History/A peoples history.jpg'
import img30 from '../../Asset/History/Guns, Germs and Steel.jpg'


const mockBooks = {
  Fiction: [
    {
      id: 1,
      title: 'The Great Gatsby',
      image: img1,
      description: 'A novel about the American dream set in the 1920s.',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      image: img2,
      description: 'A story of racial injustice in the Deep South.',
    },
    {
      id: 3,
      title: '1984',
      image: img3,
      description: 'A dystopian novel about totalitarianism.',
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      image: img4,
      description: 'A romantic novel that critiques the British landed gentry.',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      image: img5,
      description: 'A story about teenage angst and alienation.',
    },
    {
      id: 6,
      title: 'The Alchemist',
      image: img6,
      description: 'A novel about following your dreams and personal legend.',
    },
    {
      id: 7,
      title: 'The Road',
      image: img7,
      description: "A post-apocalyptic tale of a father and son’s journey.",
    },
  ],
  NonFiction: [
    {
      id: 8,
      title: 'Sapiens',
      image: img8,
      description: 'A brief history of humankind.',
    },
    {
      id: 9,
      title: 'Educated',
      image: img9,
      description: 'A memoir about a woman who grows up in a strict and abusive household.',
    },
    {
      id: 10,
      title: 'Becoming',
      image: img10,
      description: "Michelle Obama’s memoir about her life.",
    },
    {
      id: 11,
      title: 'The Immortal Life of Henrietta Lacks',
      image: img11,
      description: 'The story of Henrietta Lacks and the immortal cell line derived from her cancer cells.',
    },
    {
      id: 12,
      title: 'Born a Crime',
      image: img12,
      description: "Trevor Noah’s memoir about growing up in South Africa.",
    },
    {
      id: 13,
      title: 'The Body Keeps the Score',
      image: img13,
      description: 'A book about trauma and its effects on the body and mind.',
    },
    {
      id: 14,
      title: 'The Wright Brothers',
      image: img14,
      description: 'The story of the pioneers of aviation.',
    },
    {
      id: 15,
      title: 'Outliers',
      image: img15,
      description: 'A study of the factors that contribute to high levels of success.',
    },
  ],
  Mystery: [
    {
      id: 16,
      title: 'Gone Girl',
      image: img16,
      description: "A thriller about a woman’s disappearance.",
    },
    {
      id: 17,
      title: 'The Girl with the Dragon Tattoo',
      image: img17,
      description: 'A journalist and a hacker investigate a decades-old disappearance.',
    },
    {
      id: 18,
      title: 'The Da Vinci Code',
      image: img18,
      description: 'A mystery thriller involving secret societies and historical secrets.',
    },
    {
      id: 19,
      title: 'Big Little Lies',
      image: img19,
      description: 'A story about murder, society, and the secrets of three women.',
    },
    {
      id: 20,
      title: 'The Woman in the Window',
      image: img20,
      description: 'A psychological thriller about an agoraphobic woman.',
    },
    {
      id: 21,
      title: 'The Silent Patient',
      image: img21,
      description: 'A psychological thriller about a woman who stops speaking after a crime.',
    },
    {
      id: 22,
      title: 'In the Woods',
      image: img22,
      description: 'A detective investigates a murder that echoes his childhood.',
    },
    {
      id: 23,
      title: "The Cuckoo's Calling",
      image: img23,
      description: "A private investigator investigates a supermodel’s suicide.",
    },
  ],
  History: [
    {
      id: 24,
      title: 'The Wright Brothers',
      image: img24,
      description: 'The story of the pioneers of aviation.',
    },
    {
      id: 25,
      title: 'Unbroken',
      image: img25,
      description: 'A World War II story of survival and resilience.',
    },
    {
      id: 26,
      title: 'The Immortal Life of Henrietta Lacks',
      image: img26,
      description: 'The story of Henrietta Lacks and the immortal cell line derived from her cancer cells.',
    },
    {
      id: 27,
      title: '1776',
      image: img27,
      description: "A detailed account of the year of America’s independence.",
    },
    {
      id: 28,
      title: 'The Devil in the White City',
      image: img28,
      description: 'A tale of murder, magic, and madness at the fair that changed America.',
    },
    {
      id: 29,
      title: "A People’s History of the United States",
      image: img29,
      description: 'A perspective on U.S. history from the viewpoint of the marginalized.',
    },
    {
      id: 30,
      title: 'Guns, Germs, and Steel',
      image: img30,
      description: 'An exploration of the factors that shaped human history.',
    },
  ],
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fiction');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setBooks(mockBooks[selectedCategory]);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <section className="categorySection">
      <div className="secHeader">
        <h2 data-aos="fade-right" data-aos-duration="2000">Select a Category</h2>
        <p data-aos="fade-right" data-aos-duration="2500">Explore Our Categories</p>
      </div>
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
      <div className="content">
        <div className="books">
          <h3>Books in {selectedCategory}</h3>
          <ul>
            {books.map((book) => (
              <li key={book.id} onClick={() => handleBookClick(book)}>
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
            <Link to="#" className="btn">Book</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;