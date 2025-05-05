import React from 'react';
import checkoutHandler from './Payment/PaymentIntegration';

const BeautifulCard = ({ title, content, image,amount }) => {
  return (
    <div className="w-full sm:w-70 bg-white rounded-2 shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300 h-full sm:h-50">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-44 h-44 mx-auto object-cover pt-5 "
        />
      )}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
        <p className="text-gray-600 text-sm">{amount}</p>
        <div className="flex justify-between gap-4">
  <button onClick={()=>checkoutHandler(amount)} className="flex-1 bg-blue-500 text-white py-2 rounded">Buy</button>
  <button className="flex-1 bg-green-500 text-white py-2 rounded">Add Cart</button>
  
</div>
      </div>
    </div>
  );
};

export default BeautifulCard;
