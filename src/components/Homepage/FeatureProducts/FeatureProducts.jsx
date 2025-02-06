import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import './embla.css';


const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 16
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const FeatureProducts = () => {
  return (
    <div>
      <p className="text-center text-5xl font-bold">
        Feature Products
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      </p>
    </div>
  );
};

export default FeatureProducts;
