import React, { useState } from 'react';
import './booklist.css';

import { Link } from 'react-scroll'
import books from '../../books.json';

//Importing images============================>
import gatsbyImage from '../../Asset/Fiction/The_Great_Gatsby_Cover_1925_Retouched.jpg'
import mockingbirdImage from '../../Asset/Fiction/To_Kill_a_Mockingbird_(first_edition_cover) (1).jpg'
import nineeighfourImage from '../../Asset/Fiction/1984_first_edition_cover.jpg'
import pridepredImage from '../../Asset/Fiction/PrideAndPrejudiceTitlePage.jpg'
import catcherinryeImage from '../../Asset/Fiction/The_Catcher_in_the_Rye_(1951,_first_edition_cover).jpg'
import alchemistImage from '../../Asset/Fiction/TheAlchemist.jpg'
import roadImage from '../../Asset/Fiction/The-road.jpg'
import sapsImage from '../../Asset/Non-Fiction/sapiens.jpg'
import educatedImage from '../../Asset/Non-Fiction/Educated_(Tara_Westover).png'
import becomingImage from '../../Asset/Non-Fiction/Becoming_(Michelle_Obama_book).jpg'
import immortalhenriettaImage from '../../Asset/Non-Fiction/The_Immortal_Life_Henrietta_Lacks_(cover).jpg'
import bornacrimeImage from '../../Asset/Non-Fiction/Born_a_Crime_by_Trevor_Noah_(book_cover).jpg'
import bodykeepscoreImage from '../../Asset/Non-Fiction/TheBodyKeepstheScore.jpg'
import wrightbrothersImage from '../../Asset/Non-Fiction/The Wright Brothers.jpg'
import outlierImage from '../../Asset/Non-Fiction/Outliers_(book_cover).png'
import gonegirlImage from '../../Asset/Mystery/Gone_Girl_(Flynn_novel).jpg'
import girlwithtattooImage from '../../Asset/Mystery/Thegirlwiththedragontattoo.jpg'
import davinciImage from '../../Asset/Mystery/DaVinciCode.jpg'
import littleliesImage from '../../Asset/Mystery/Big_Little_Lies_Cover.jpg'
import womaninwindowImage from '../../Asset/Mystery/The_Woman_in_the_Window.jpg'
import silentpatientImage from '../../Asset/Mystery/The_Silent_Patient_early_2019_UK_edition.png'
import inwoodsImage from '../../Asset/Mystery/In_the_Woods_cover.jpg'
import cuckoocallImage from "../../Asset/Mystery/TheCuckoo'sCalling(first_UK_edition)cover.jpg"
//import wrightbrothersImage from '../../Asset/History/The Wright Brothers.jpg'
import unbrokenImage from '../../Asset/History/Unbroken_by_Laura_Hillenbrand_(cover).jpg'
//import immortalhenriettaImage from '../../Asset/History/The_Immortal_Life_Henrietta_Lacks_(cover).jpg'
import sevensevensixImage from '../../Asset/History/1776.jpg'
import devilincityImage from '../../Asset/History/Devil In the White city.jpg'
import peoplehistoryImage from '../../Asset/History/A peoples history.jpg'
import gggImage from '../../Asset/History/Guns, Germs and Steel.jpg'

const images = {
  gatsby: gatsbyImage,
  mockingbird: mockingbirdImage,
  nineeighfour: nineeighfourImage,
  pridepred: pridepredImage,
  catcherinrye: catcherinryeImage,
  alchemist: alchemistImage,
  road: roadImage,
  saps: sapsImage,
  educated: educatedImage,
  becoming: becomingImage,
  immortalhenrietta: immortalhenriettaImage,
  bornacrime: bornacrimeImage,
  bodykeepscore: bodykeepscoreImage,
  wrightbrothers: wrightbrothersImage,
  outlier: outlierImage,
  gonegirl: gonegirlImage,
  girlwithtattoo: girlwithtattooImage,
  davinci: davinciImage,
  littlelies: littleliesImage,
  womaninwindow: womaninwindowImage,
  silentpatient: silentpatientImage,
  inwoods: inwoodsImage,
  cuckoocall: cuckoocallImage,
  unbroken: unbrokenImage,
  sevensevensix: sevensevensixImage,
  devilincity: devilincityImage,
  devilincity: devilincityImage,
  peoplehistory: peoplehistoryImage,
  ggg: gggImage
  // Map other images similarly...
};

const BookList = () => {
  const [visibleBooks, setVisibleBooks] = useState(10); // Initially show 10 books

  const handleViewMore = () => {
    setVisibleBooks((prev) => prev + 10); // Show 10 more books when clicked
  };

  return (
    <section className="bookList section container">
      <div className="secHeader">
        <h2 className="secTitle">All Books</h2>
      </div>
      <div className="bookListings">
        {books.slice(0, visibleBooks).map(({ title, image, description, author, price, bookingUrl }, index) => (
          <div className="bookCard" key={index}>
            <img src={images[image]} alt={title} className="bookCover" /*replaced "bookCover with {images} to get the correct images"*/ />
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


