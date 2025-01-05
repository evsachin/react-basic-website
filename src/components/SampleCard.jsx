import React from "react";
import img1 from '../assets/img1.png'

const SampleCard = () => {
  const product = {
    image: img1, // Replace with actual image URL
    title: "Sample Product",
    price: "$29.99",
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
      <img
        className="w-full h-48 object-cover"
        src={product.img1}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-400 text-base">{product.price}</p>
      </div>
      <div className="px-6 py-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SampleCard;
