// storage.js

const mockBooks = {
  Fiction: [
    {
      id: 1,
      title: 'The Great Gatsby',
      image: require('./Asset/Fiction/The_Great_Gatsby_Cover_1925_Retouched.jpg'),
      description: 'A novel about the American dream set in the 1920s.',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      image: require('./Asset/Fiction/To_Kill_a_Mockingbird_(first_edition_cover) (1).jpg'),
      description: 'A story of racial injustice in the Deep South.',
    },
    {
      id: 3,
      title: '1984',
      image: require('./Asset/Fiction/1984_first_edition_cover.jpg'),
      description: 'A dystopian novel about totalitarianism.',
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      image: require('./Asset/Fiction/PrideAndPrejudiceTitlePage.jpg'),
      description: 'A romantic novel that critiques the British landed gentry.',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      image: require('./Asset/Fiction/The_Catcher_in_the_Rye_(1951,_first_edition_cover).jpg'),
      description: 'A story about teenage angst and alienation.',
    },
    {
      id: 6,
      title: 'The Alchemist',
      image: require('./Asset/Fiction/TheAlchemist.jpg'),
      description: 'A novel about following your dreams and personal legend.',
    },
    {
      id: 7,
      title: 'The Road',
      image: require('./Asset/Fiction/The-road.jpg'),
      description: "A post-apocalyptic tale of a father and son’s journey.",
    },
  ],
  NonFiction: [
    {
      id: 8,
      title: 'Sapiens',
      image: require('./Asset/Non-Fiction/sapiens.jpg'),
      description: 'A brief history of humankind.',
    },
    {
      id: 9,
      title: 'Educated',
      image: require('./Asset/Non-Fiction/Educated_(Tara_Westover).png'),
      description: 'A memoir about a woman who grows up in a strict and abusive household.',
    },
    {
      id: 10,
      title: 'Becoming',
      image: require('./Asset/Non-Fiction/Becoming_(Michelle_Obama_book).jpg'),
      description: "Michelle Obama’s memoir about her life.",
    },
    {
      id: 11,
      title: 'The Immortal Life of Henrietta Lacks',
      image: require('./Asset/Non-Fiction/The_Immortal_Life_Henrietta_Lacks_(cover).jpg'),
      description: 'The story of Henrietta Lacks and the immortal cell line derived from her cancer cells.',
    },
    {
      id: 12,
      title: 'Born a Crime',
      image: require('./Asset/Non-Fiction/Born_a_Crime_by_Trevor_Noah_(book_cover).jpg'),
      description: "Trevor Noah’s memoir about growing up in South Africa.",
    },
    {
      id: 13,
      title: 'The Body Keeps the Score',
      image: require('./Asset/Non-Fiction/TheBodyKeepstheScore.jpg'),
      description: 'A book about trauma and its effects on the body and mind.',
    },
    {
      id: 14,
      title: 'The Wright Brothers',
      image: require('./Asset/Non-Fiction/The Wright Brothers.jpg'),
      description: 'The story of the pioneers of aviation.',
    },
    {
      id: 15,
      title: 'Outliers',
      image: require('./Asset/Non-Fiction/Outliers_(book_cover).png'),
      description: 'A study of the factors that contribute to high levels of success.',
    },
  ],
  Mystery: [
    {
      id: 16,
      title: 'Gone Girl',
      image: require('./Asset/Mystery/Gone_Girl_(Flynn_novel).jpg'),
      description: "A thriller about a woman’s disappearance.",
    },
    {
      id: 17,
      title: 'The Girl with the Dragon Tattoo',
      image: require('./Asset/Mystery/Thegirlwiththedragontattoo.jpg'),
      description: 'A journalist and a hacker investigate a decades-old disappearance.',
    },
    {
      id: 18,
      title: 'The Da Vinci Code',
      image: 'https://example.com/davinci.jpg',
      description: 'A mystery thriller involving secret societies and historical secrets.',
    },
    {
      id: 19,
      title: 'Big Little Lies',
      image: 'https://example.com/biglittlelies.jpg',
      description: 'A story about murder, society, and the secrets of three women.',
    },
    {
      id: 20,
      title: 'The Woman in the Window',
      image: 'https://example.com/womaninwindow.jpg',
      description: 'A psychological thriller about an agoraphobic woman.',
    },
    {
      id: 21,
      title: 'The Silent Patient',
      image: require('./Asset/Mystery/The_Silent_Patient_early_2019_UK_edition.png'),
      description: 'A psychological thriller about a woman who stops speaking after a crime.',
    },
    {
      id: 22,
      title: 'In the Woods',
      image: 'https://example.com/woods.jpg',
      description: 'A detective investigates a murder that echoes his childhood.',
    },
    {
      id: 23,
      title: "The Cuckoo's Calling",
      image: 'https://example.com/cuckoo.jpg',
      description: "A private investigator investigates a supermodel’s suicide.",
    },
  ],
  History: [
    {
      id: 24,
      title: 'The Wright Brothers',
      image: 'https://example.com/wright.jpg',
      description: 'The story of the pioneers of aviation.',
    },
    {
      id: 25,
      title: 'Unbroken',
      image: 'https://example.com/unbroken.jpg',
      description: 'A World War II story of survival and resilience.',
    },
    {
      id: 26,
      title: 'The Immortal Life of Henrietta Lacks',
      image: 'https://example.com/henrietta.jpg',
      description: 'The story of Henrietta Lacks and the immortal cell line derived from her cancer cells.',
    },
    {
      id: 27,
      title: '1776',
      image: 'https://example.com/1776.jpg',
      description: "A detailed account of the year of America’s independence.",
    },
    {
      id: 28,
      title: 'The Devil in the White City',
      image: 'https://example.com/devil.jpg',
      description: 'A tale of murder, magic, and madness at the fair that changed America.',
    },
    {
      id: 29,
      title: "A People’s History of the United States",
      image: 'https://example.com/peopleshistory.jpg',
      description: 'A perspective on U.S. history from the viewpoint of the marginalized.',
    },
    {
      id: 30,
      title: 'Guns, Germs, and Steel',
      image: require('./Asset/History/Guns, Germs and Steel.jpg'),
      description: 'An exploration of the factors that shaped human history.',
    },
  ],
};

// Separate Trending section

const trendingBooks = [
  {
    title: 'The Midnight Library',
    image: require('./Asset/Trending/The_Midnight_Library.jpg'),
    description: 'A novel about the choices that go into a life well lived.',
  },
  {
    title: 'Project Hail Mary',
    image: require('./Asset/Trending/Project_Hail_Mary,_First_Edition_Cover_(2021).jpg'),
    description: 'A lone astronaut must save Earth from disaster.',
  },
  {
    title: 'The Vanishing Half',
    image: require('./Asset/Trending/The_Vanishing_Half_(Brit_Bennett).png'),
    description: 'A multi-generational story about two twin sisters.',
  },
  {
    title: 'Klara and the Sun',
    image: require('./Asset/Trending/Klara_and_the_Sun_(Kazuo_Ishiguro).png'),
    description: 'A story about an artificial friend and the nature of love.',
  },
  {
    title: 'The Invisible Life of Addie LaRue',
    image: require('./Asset/Trending/InvisibleAddieLaRue.jpg'),
    description: 'A young woman makes a Faustian bargain to live forever.',
  },
];

// In storage.js
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


export { mockBooks, trendingBooks, dailyDeals };


