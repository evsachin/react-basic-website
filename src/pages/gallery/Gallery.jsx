import React from "react";
import ProductCard from "../../components/ProductCard";
import evisiontechlogo from "../../assets/evisiontech_logo.png";
import SampleCard from "../../components/SampleCard";

export default function Gallery() {
  const handleBuyProduct = () => {
    console.log("Product buy tapped...");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <ProductCard
        image={evisiontechlogo} // Replace with a valid product image URL
        title="Awesome Product"
        price="29.99"
        onBuy={handleBuyProduct} // Correctly passing the function here
      />

      <SampleCard/>
    </div>
  );
}
