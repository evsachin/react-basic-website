import React from "react";

const ProductCard = ({ image, title, price, onBuy }) => {
  return (
    <div className="max-w-sm bg-slate-700 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>

        {/* Product Price */}
        <p className="text-blue-500 font-bold text-lg mt-2">${price}</p>

        {/* Buy Now Button */}
        <button
          onClick={onBuy}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
