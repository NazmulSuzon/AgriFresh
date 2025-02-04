// 'use client's
// import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import React from "react";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Q. s product",
      price: "$39.00",
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
      name: "Fresh Juice",
      price: "$15.00",
      image: "assets/products/foodDrinks/3.webp",
    },
    {
      id: 4,
      name: "Delicious Pizza",
      price: "$49.00",
      image: "assets/products/foodDrinks/4.webp",
    },
    {
      id: 5,
      name: "Q. s product",
      price: "$39.00",
      image: "assets/products/foodDrinks/5.webp",
    },
    {
      id: 6,
      name: "Q. s product",
      price: "$39.00",
      image: "assets/products/foodDrinks/6.webp",
    },
    {
      id: 7,
      name: "Q. s product",
      price: "$39.00",
      image: "assets/products/foodDrinks/7.webp",
    },
    {
      id: 8,
      name: "Q. s product",
      price: "$39.00",
      image: "assets/products/foodDrinks/8.webp",
    },
  ];

  return (
    <div className="mt-20 font-bold container mx-auto">
      <h1 className="text-center font-bold text-4xl mb-8">Our Products</h1>
      <div className="grid grid-cols-4 gap-8 ">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-sm p-4 rounded-lg">
            <figure className="px-10 pt-10">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl"
              />
            </figure>
            <div className="items-center text-center">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-primary text-lg">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
