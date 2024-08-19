// storage.js

const mockBooks = {
  Fiction: [
    {
      title: 'The Great Gatsby',
      image: 'https://example.com/gatsby.jpg',
      description: 'A novel about the American dream set in the 1920s.',
    },
    {
      title: 'To Kill a Mockingbird',
      image: 'https://example.com/mockingbird.jpg',
      description: 'A story of racial injustice in the Deep South.',
    },
    {
      title: '1984',
      image: 'https://example.com/1984.jpg',
      description: 'A dystopian novel about totalitarianism.',
    },
    {
      title: 'Pride and Prejudice',
      image: 'https://example.com/pride.jpg',
      description: 'A romantic novel that critiques the British landed gentry.',
    },
    {
      title: 'The Catcher in the Rye',
      image: 'https://example.com/catcher.jpg',
      description: 'A story about teenage angst and alienation.',
    },
    {
      title: 'The Alchemist',
      image: 'https://example.com/alchemist.jpg',
      description: 'A novel about following your dreams and personal legend.',
    },
    {
      title: 'The Road',
      image: 'https://example.com/road.jpg',
      description: "A post-apocalyptic tale of a father and son’s journey.",
    },
  ],
  NonFiction: [
    {
      title: 'Sapiens',
      image: 'https://example.com/sapiens.jpg',
      description: 'A brief history of humankind.',
    },
    {
      title: 'Educated',
      image: 'https://example.com/educated.jpg',
      description: 'A memoir about a woman who grows up in a strict and abusive household.',
    },
    {
      title: 'Becoming',
      image: 'https://example.com/becoming.jpg',
      description: "Michelle Obama’s memoir about her life.",
    },
    {
      title: 'The Immortal Life of Henrietta Lacks',
      image: 'https://example.com/henrietta.jpg',
      description: 'The story of Henrietta Lacks and the immortal cell line derived from her cancer cells.',
    },
    {
      title: 'Born a Crime',
      image: 'https://example.com/bornacrime.jpg',
      description: "Trevor Noah’s memoir about growing up in South Africa.",
    },
    {
      title: 'The Body Keeps the Score',
      image: 'https://example.com/body.jpg',
      description: 'A book about trauma and its effects on the body and mind.',
    },
    {
      title: 'The Wright Brothers',
      image: 'https://example.com/wright.jpg',
      description: 'The story of the pioneers of aviation.',
    },
    {
      title: 'Outliers',
      image: 'https://example.com/outliers.jpg',
      description: 'A study of the factors that contribute to high levels of success.',
    },
  ],
  Mystery: [
    {
      title: 'Gone Girl',
      image: 'https://example.com/gonegirl.jpg',
      description: "A thriller about a woman’s disappearance.",
    },
    {
      title: 'The Girl with the Dragon Tattoo',
      image: 'https://example.com/dragon.jpg',
      description: 'A journalist and a hacker investigate a decades-old disappearance.',
    },
    {
      title: 'The Da Vinci Code',
      image: 'https://example.com/davinci.jpg',
      description: 'A mystery thriller involving secret societies and historical secrets.',
    },
    {
      title: 'Big Little Lies',
      image: 'https://example.com/biglittlelies.jpg',
      description: 'A story about murder, society, and the secrets of three women.',
    },
    {
      title: 'The Woman in the Window',
      image: 'https://example.com/womaninwindow.jpg',
      description: 'A psychological thriller about an agoraphobic woman.',
    },
    {
      title: 'The Silent Patient',
      image: 'https://example.com/silentpatient.jpg',
      description: 'A psychological thriller about a woman who stops speaking after a crime.',
    },
    {
      title: 'In the Woods',
      image: 'https://example.com/woods.jpg',
      description: 'A detective investigates a murder that echoes his childhood.',
    },
    {
      title: "The Cuckoo's Calling",
      image: 'https://example.com/cuckoo.jpg',
      description: "A private investigator investigates a supermodel’s suicide.",
    },
  ],
  History: [
    {
      title: 'The Wright Brothers',
      image: 'https://example.com/wright.jpg',
      description: 'The story of the pioneers of aviation.',
    },
    {
      title: 'Unbroken',
      image: 'https://example.com/unbroken.jpg',
      description: 'A World War II story of survival and resilience.',
    },
    {
      title: 'The Immortal Life of Henrietta Lacks',
      image: 'https://example.com/henrietta.jpg',
      description: 'The story of Henrietta Lacks and the immortal cell line derived from her cancer cells.',
    },
    {
      title: '1776',
      image: 'https://example.com/1776.jpg',
      description: "A detailed account of the year of America’s independence.",
    },
    {
      title: 'The Devil in the White City',
      image: 'https://example.com/devil.jpg',
      description: 'A tale of murder, magic, and madness at the fair that changed America.',
    },
    {
      title: "A People’s History of the United States",
      image: 'https://example.com/peopleshistory.jpg',
      description: 'A perspective on U.S. history from the viewpoint of the marginalized.',
    },
    {
      title: 'Guns, Germs, and Steel',
      image: 'https://example.com/guns.jpg',
      description: 'An exploration of the factors that shaped human history.',
    },
    {
      title: 'The Wright Brothers',
      image: 'https://example.com/wrightbrothers.jpg',
      description: 'A biography of the brothers who invented the airplane.',
    },
  ],
};

// Separate Trending section

const trendingBooks = [
  {
    title: 'The Midnight Library',
    image: require('./Asset/Trending/img_1.jpeg'),
    description: 'A novel about the choices that go into a life well lived.',
  },
  {
    title: 'Project Hail Mary',
    image: require('./Asset/Trending/img_2.jpg'),
    description: 'A lone astronaut must save Earth from disaster.',
  },
  {
    title: 'The Vanishing Half',
    image: require('./Asset/Trending/img_3.jpg'),
    description: 'A multi-generational story about two twin sisters.',
  },
  {
    title: 'Klara and the Sun',
    image: require('./Asset/Trending/img_4.jpg'),
    description: 'A story about an artificial friend and the nature of love.',
  },
  {
    title: 'The Invisible Life of Addie LaRue',
    image: 'https://example.com/addie.jpg',
    description: 'A young woman makes a Faustian bargain to live forever.',
  },
  {
    title: 'Malibu Rising',
    image: require('./Asset/Trending/img_6.jpg'),
    description: "A story about a family’s annual summer party and its secrets.",
  },
  {
    title: 'The Guest List',
    image: 'https://example.com/guestlist.jpg',
    description: 'A wedding celebration turns deadly on a remote island.',
  },
  {
    title: 'The Last House on Needless Street',
    image: 'https://example.com/lasthouse.jpg',
    description: 'A psychological thriller that blurs the lines of reality.',
  },
];

export { mockBooks, trendingBooks };


