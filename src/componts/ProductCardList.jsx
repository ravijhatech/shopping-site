import React from 'react';
import BeautifulCard from './BeautiFulCard';
import HeaderCard from './HeaderCard';


const cardData = [
  {
    id: 1,
    title: 'Explore the Mountains',
    content: 'Discover breathtaking views and scenic trails.',
    image: 'https://w7.pngwing.com/pngs/203/140/png-transparent-dress-cardigan-clothing-top-sarafan-baby-clothes-infant-nightwear-magenta-thumbnail.png',
    amount:89
  },
  {
    id: 2,
    title: 'Ocean Adventures',
    content: 'Feel the breeze and sail the seas in style.',
    image: 'https://w7.pngwing.com/pngs/203/140/png-transparent-dress-cardigan-clothing-top-sarafan-baby-clothes-infant-nightwear-magenta-thumbnail.png',
    amount:89
  },
  {
    id: 38,
    title: 'City Lights',
    content: 'Enjoy the nightlife and urban exploration.',
    image: 'https://w7.pngwing.com/pngs/203/140/png-transparent-dress-cardigan-clothing-top-sarafan-baby-clothes-infant-nightwear-magenta-thumbnail.png',
    amount:89
  },
  {
    id: 3,
    title: 'City Lights',
    content: 'Enjoy the nightlife and urban exploration.',
    image: 'https://w7.pngwing.com/pngs/203/140/png-transparent-dress-cardigan-clothing-top-sarafan-baby-clothes-infant-nightwear-magenta-thumbnail.png',
    amount:89
  },
];

const CardGrid = () => {
  return (
    <>
     <HeaderCard/>
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition duration-300" >
        {cardData.map(card => (
          <BeautifulCard
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image} 
            amount={card.amount}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default CardGrid;
