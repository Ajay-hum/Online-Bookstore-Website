import React from 'react'
import './deals.css'

//Importing Images to use===================>#
import img1 from '../../Asset/Deals/TheNightCircus.jpg'
import img2 from '../../Asset/Deals/Circe_Offering_the_Cup_to_Odysseus.jpg'
import img3 from '../../Asset/Deals/Folk_med_ångest.jpg'
import img4 from '../../Asset/Deals/The_Seven_Husbands_of_Evelyn_Hugo.jpg'
import img5 from '../../Asset/Deals/Wells_-_The_Invisible_Man_-_Pearson_cover_1897.jpg'
import img6 from '../../Asset/Deals/Little_Fires_Everywhere_Title_Card.png'
import img7 from '../../Asset/Deals/TheSongofAchilles.png'

const dailyDeals = [
  {
    title: 'The Night Circus',
    image: img1,
    description: 'A magical competition between two young illusionists in a mysterious circus.',
    discount: '15% off',
    price: '$12.74'
  },
  {
    title: 'Circe',
    image: img2,
    description: 'A retelling of the story of Circe, the witch from The Odyssey.',
    discount: '20% off',
    price: '$11.99'
  },
  {
    title: 'Anxious People',
    image: img3,
    description: 'A poignant story about a bank robbery gone wrong and the people involved.',
    discount: '10% off',
    price: '$13.49'
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    image: img4,
    description: 'A reclusive Hollywood icon recounts her glamorous life and seven marriages.',
    discount: '25% off',
    price: '$9.99'
  },
  {
    title: 'The Invisible Man',
    image: img5,
    description: 'A classic science fiction story about a man who becomes invisible.',
    discount: '15% off',
    price: '$8.49'
  },
  {
    title: 'Little Fires Everywhere',
    image: img6,
    description: 'A story about the intertwined lives of a mother and daughter in a suburban town.',
    discount: '20% off',
    price: '$10.99'
  },
  {
    title: 'The Song of Achilles',
    image: img7,
    description: 'A retelling of the Iliad from the perspective of Patroclus.',
    discount: '15% off',
    price: '$11.24'
  },
  {
    title: 'The Henna Artist',
    image: '#',
    description: 'A story of love, betrayal, and self-discovery set in 1950s India.',
    discount: '20% off',
    price: '$10.99'
  }
];

const Deals = () => {
  return (
    <section className="deals section container">
      <div className="secHeader">
        <h1 className="secTitle">📚 Exclusive Offers 🌟</h1>
      </div>
      <div className="dealslist">
        {dailyDeals.map((deal, index) => (
          <div className="dealCard" key={index}>
            <img src={deal.image} alt={deal.title} />
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <p className="discount">{deal.discount}</p>
            <p className="price">{deal.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;