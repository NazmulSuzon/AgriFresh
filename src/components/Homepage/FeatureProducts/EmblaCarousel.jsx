"use client";
import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const FeatureProductsData = [
  {
    id: 1,
    name: "Papaya",
    price: "$15.00",
    image: "assets/featureProducts/1.webp",
  },
  {
    id: 2,
    name: "Papaya",
    price: "$16.00",
    image: "assets/featureProducts/2.webp",
  },
  {
    id: 3,
    name: "Papaya",
    price: "$17.00",
    image: "assets/featureProducts/3.webp",
  },
  {
    id: 4,
    name: "Papaya",
    price: "$18.00",
    image: "assets/featureProducts/4.webp",
  },
  {
    id: 5,
    name: "Papaya",
    price: "$19.00",
    image: "assets/featureProducts/5.webp",
  },
  {
    id: 6,
    name: "Papaya",
    price: "$20.00",
    image: "assets/featureProducts/6.webp",
  },
  {
    id: 7,
    name: "Papaya",
    price: "$21.00",
    image: "assets/featureProducts/7.webp",
  },
  {
    id: 8,
    name: "Papaya",
    price: "$22.00",
    image: "assets/featureProducts/8.webp",
  },
  {
    id: 9,
    name: "Papaya",
    price: "$23.00",
    image: "assets/featureProducts/9.webp",
  },
  {
    id: 10,
    name: "Papaya",
    price: "$24.00",
    image: "assets/featureProducts/10.webp",
  },
  {
    id: 11,
    name: "Papaya",
    price: "$25.00",
    image: "assets/featureProducts/11.webp",
  },
  {
    id: 12,
    name: "Papaya",
    price: "$26.00",
    image: "assets/featureProducts/12.webp",
  },
  {
    id: 13,
    name: "Papaya",
    price: "$27.00",
    image: "assets/featureProducts/13.webp",
  },
  {
    id: 14,
    name: "Papaya",
    price: "$28.00",
    image: "assets/featureProducts/14.webp",
  },
  {
    id: 15,
    name: "Papaya",
    price: "$29.00",
    image: "assets/featureProducts/15.webp",
  },
  {
    id: 16,
    name: "Papaya",
    price: "$30.00",
    image: "assets/featureProducts/16.webp",
  },
];


const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(() => (
            <div className="embla__slide border-2 border-red-600">
                {/* Feature Products Map Start */}
                <div className="grid grid-cols-1 grid-rows-2 gap-8">
                  {FeatureProductsData.map((product) => (
                    <div
                      key={product.id}
                      className="card bg-base-100 shadow-sm p-4 rounded-lg"
                    >
                      <figure className="px-10 pt-10">
                        <img src={product.image} alt={product.name} />
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
                {/* Feature Products Map End */}
        
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
