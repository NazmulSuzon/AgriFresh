import React from "react";

const OurProducts = () => {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center font-bold text-6xl">Our Products</h1>
      <div role="tablist" className="tabs tabs-bordered font-bold">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Food & Drinks"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Bread & Cake"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Dried Foods"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 3
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Fish & Meat"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 4
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Vegetables"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 5
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
