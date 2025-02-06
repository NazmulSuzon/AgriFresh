import React from 'react';

const FeatureProductsData = [
  {
    id: 1,
    name: "W. p m product",
    price: "$15.00",
    image: "assets/featureProducts/1.webp",
  },
  {
    id: 2,
    name: "ZH. Gardening",
    price: "$16.00",
    image: "assets/featureProducts/2.webp",
  },
  {
    id: 3,
    name: "ZF. a product",
    price: "$17.00",
    image: "assets/featureProducts/3.webp",
  },
  {
    id: 4,
    name: "ZD.s product",
    price: "$18.00",
    image: "assets/featureProducts/4.webp",
  },
  {
    id: 5,
    name: "ZI. Gardening",
    price: "$19.00",
    image: "assets/featureProducts/5.webp",
  },
  {
    id: 6,
    name: "ZG. Gardening",
    price: "$20.00",
    image: "assets/featureProducts/6.webp",
  },
  {
    id: 7,
    name: "ZE. v w s product",
    price: "$21.00",
    image: "assets/featureProducts/7.webp",
  },
  {
    id: 8,
    name: "Y. n product",
    price: "$22.00",
    image: "assets/featureProducts/8.webp",
  },
  {
    id: 9,
    name: "W. p m product",
    price: "$23.00",
    image: "assets/featureProducts/9.webp",
  },
  {
    id: 10,
    name: "ZH Gardening",
    price: "$24.00",
    image: "assets/featureProducts/10.webp",
  },
  {
    id: 11,
    name: "ZF. a product",
    price: "$25.00",
    image: "assets/featureProducts/11.webp",
  },
  {
    id: 12,
    name: "zd.s product",
    price: "$26.00",
    image: "assets/featureProducts/12.webp",
  },
  {
    id: 13,
    name: "ZI. Gardening",
    price: "$27.00",
    image: "assets/featureProducts/13.webp",
  },
  {
    id: 14,
    name: "ZG. Gardening",
    price: "$28.00",
    image: "assets/featureProducts/14.webp",
  },
  {
    id: 15,
    name: "ZE. v w s product",
    price: "$29.00",
    image: "assets/featureProducts/15.webp",
  },
  {
    id: 16,
    name: "Y. n product",
    price: "$30.00",
    image: "assets/featureProducts/16.webp",
  },
];

const FeaturedProducts = () => {
  return (
    <div className='container mx-auto'>
       <h1 className='text-6xl font-bold text-center'>Featured Products</h1>
       <div className='grid grid-cols-4 mt-4 px-10 space-y-4'>
          {FeatureProductsData.slice(0, 8).map((product) => (
            <div key={product.id} className='flex justify-center items-center flex-col'>
              <img src={product.image} className='w-[266px] h-[266px]' alt={product.name} />
              <p className='font-bold'>{product.name}</p>
              <p className='text-primary font-bold'>{product.price}</p>
            </div>
          ))}
       </div>
    </div>
  );
};

export default FeaturedProducts;