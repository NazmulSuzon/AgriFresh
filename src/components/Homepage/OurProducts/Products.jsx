"use client";
import React, { useState } from "react";

const productData = {
  "Food & Drinks": [
    {
      id: 1,
      name: "Fresh Juice",
      price: "$15.00",
      image: "assets/products/foodDrinks/1.webp",
    },
    {
      id: 2,
      name: "Tasty Cake",
      price: "$25.00",
      image: "assets/products/foodDrinks/2.webp",
    },
    {
      id: 3,
      name: "Delicious Pizza",
      price: "$49.00",
      image: "assets/products/foodDrinks/3.webp",
    },
    {
      id: 4,
      name: "Healthy Salad",
      price: "$30.00",
      image: "assets/products/foodDrinks/4.webp",
    },
  ],
  "Bread & Cake": [
    {
      id: 5,
      name: "Chocolate Cake",
      price: "$40.00",
      image: "assets/products/breadCake/1.webp",
    },
    {
      id: 6,
      name: "Blueberry Muffin",
      price: "$10.00",
      image: "assets/products/breadCake/2.webp",
    },
    {
      id: 7,
      name: "Croissant",
      price: "$5.00",
      image: "assets/products/breadCake/3.webp",
    },
    {
      id: 8,
      name: "French Baguette",
      price: "$12.00",
      image: "assets/products/breadCake/4.webp",
    },
  ],
  "Snacks & Chips": [
    {
      id: 9,
      name: "Potato Chips",
      price: "$8.00",
      image: "assets/products/snacksChips/1.webp",
    },
    {
      id: 10,
      name: "Nachos",
      price: "$15.00",
      image: "assets/products/snacksChips/2.webp",
    },
    {
      id: 11,
      name: "Popcorn",
      price: "$7.00",
      image: "assets/products/snacksChips/3.webp",
    },
    {
      id: 12,
      name: "Pretzels",
      price: "$6.00",
      image: "assets/products/snacksChips/4.webp",
    },
  ],
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("Food & Drinks");

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center font-bold text-4xl mb-8">Our Products</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(productData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${
              activeTab === category ? "text-primary underline decoration-2 underline-offset-[20px]" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-4 gap-8">
        {productData[activeTab].map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-sm p-4 rounded-lg"
          >
            <figure className="px-10 pt-10">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-[200px] h-[200px] mx-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h4 className="card-title text-lg font-semibold">
                {product.name}
              </h4>
              <p className="text-primary text-lg">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
