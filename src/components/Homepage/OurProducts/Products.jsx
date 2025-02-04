"use client";
import React, { useState } from "react";

const productData = {
  "Food & Drinks": [
    {
      id: 1,
      name: "Papaya",
      price: "$15.00",
      image: "assets/products/foodDrinks/1.webp",
    },
    {
      id: 2,
      name: "Fresh Berries",
      price: "$25.00",
      image: "assets/products/foodDrinks/2.webp",
    },
    {
      id: 3,
      name: "Mangosteen",
      price: "$49.00",
      image: "assets/products/foodDrinks/3.webp",
    },
    {
      id: 4,
      name: "Broccoli",
      price: "$30.00",
      image: "assets/products/foodDrinks/4.webp",
    },
  ],
  "Bread & Cake": [
    {
      id: 5,
      name: "Chocolate Cake",
      price: "$40.00",
      image: "assets/products/breadCake/6.jpg",
    },
    {
      id: 6,
      name: "Blueberry Muffin",
      price: "$10.00",
      image: "assets/products/breadCake/2.jpg",
    },
    {
      id: 7,
      name: "Croissant",
      price: "$5.00",
      image: "assets/products/breadCake/5.jpg",
    },
    {
      id: 8,
      name: "French Baguette",
      price: "$12.00",
      image: "assets/products/breadCake/4.jpg",
    },
  ],
  "Dried Foods": [
    {
      id: 9,
      name: "Potato Chips",
      price: "$8.00",
      image: "assets/products/driedFoods/1.jpg",
    },
    {
      id: 10,
      name: "Nachos",
      price: "$15.00",
      image: "assets/products/driedFoods/2.jpg",
    },
    {
      id: 11,
      name: "Popcorn",
      price: "$7.00",
      image: "assets/products/driedFoods/3.jpg",
    },
    {
      id: 12,
      name: "Pretzels",
      price: "$6.00",
      image: "assets/products/driedFoods/4.jpg",
    },
  ],
  "Fish & Meat": [
    {
      id: 13,
      name: "Fish Fillet",
      price: "$8.00",
      image: "assets/products/fishMeat/1.jpg",
    },
    {
      id: 14,
      name: "Meat Steak",
      price: "$15.00",
      image: "assets/products/fishMeat/2.jpg",
    },
    {
      id: 15,
      name: "Salmon Fish",
      price: "$7.00",
      image: "assets/products/fishMeat/3.jpg",
    },
    {
      id: 16,
      name: "Fish & Meat",
      price: "$6.00",
      image: "assets/products/fishMeat/4.jpg",
    },
  ],
  "Vegetables": [
    {
      id: 17,
      name: "Vegetable Salad",
      price: "$8.00",
      image: "assets/products/vegetables/1.jpg",
    },
    {
      id: 18,
      name: "Vegetable basket",
      price: "$15.00",
      image: "assets/products/vegetables/2.jpg",
    },
    {
      id: 19,
      name: "Banana",
      price: "$7.00",
      image: "assets/products/vegetables/3.jpg",
    },
    {
      id: 20,
      name: "Lemon",
      price: "$6.00",
      image: "assets/products/vegetables/4.jpg",
    },
  ],
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("Food & Drinks");

  return (
    <div className="container mx-auto mt-10 font-bold">
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
