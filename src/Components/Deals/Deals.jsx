import React from 'react'
import './deals.css'

const dailyDeals = [
  {
    title: 'The Night Circus',
    image: 'https://example.com/nightcircus.jpg',
    description: 'A magical competition between two young illusionists in a mysterious circus.',
    discount: '15% off',
    price: '$12.74'
  },
  {
    title: 'Circe',
    image: 'https://example.com/circe.jpg',
    description: 'A retelling of the story of Circe, the witch from The Odyssey.',
    discount: '20% off',
    price: '$11.99'
  },
  {
    title: 'Anxious People',
    image: 'https://example.com/anxiouspeople.jpg',
    description: 'A poignant story about a bank robbery gone wrong and the people involved.',
    discount: '10% off',
    price: '$13.49'
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    image: 'https://example.com/evelynhugo.jpg',
    description: 'A reclusive Hollywood icon recounts her glamorous life and seven marriages.',
    discount: '25% off',
    price: '$9.99'
  },
  {
    title: 'The Invisible Man',
    image: 'https://example.com/invisibleman.jpg',
    description: 'A classic science fiction story about a man who becomes invisible.',
    discount: '15% off',
    price: '$8.49'
  },
  {
    title: 'Little Fires Everywhere',
    image: 'https://example.com/littlefires.jpg',
    description: 'A story about the intertwined lives of a mother and daughter in a suburban town.',
    discount: '20% off',
    price: '$10.99'
  },
  {
    title: 'The Song of Achilles',
    image: 'https://example.com/songofachilles.jpg',
    description: 'A retelling of the Iliad from the perspective of Patroclus.',
    discount: '15% off',
    price: '$11.24'
  },
  {
    title: 'The Henna Artist',
    image: 'https://example.com/hennartist.jpg',
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