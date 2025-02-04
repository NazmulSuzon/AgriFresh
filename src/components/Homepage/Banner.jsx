import React from "react";
import styles from "../shared/Button.module.css";

const banners = [
  {
    title: "Our Garden's Most Favorite Food",
    description: "We provide the best quality food for your garden.",
    next: "#slide2",
    previous: "#slide3",
  },
  {
    title: "Tasty & Healthy Organic Food",
    description: "We provide the best quality food for your garden.",
    next: "#slide3",
    previous: "#slide1",
  },
  {
    title: "Fresh & Organic Food",
    description: "We provide the best quality food for your garden.",
    next: "#slide1",
    previous: "#slide2",
  },
];

const Banner = () => {
  return (
    <div>
      <div className="w-full mt-[-66px] carousel">
        {banners?.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-cover bg-top bg-no-repeat h-[100vh]"
            style={{
              backgroundImage: `url(/assets/carousel/${index + 1}.jpg)`,
            }}
          >
            <div className="flex items-center text-white w-full h-full pl-36">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p className="text-2xl pb-6">{banner.description}</p>

                <button><span className={styles.button}>Discover More</span></button>
              </div>
            </div>

            <div className="absolute flex justify-between transform bottom-12 right-12 ">
              <a href={banner.previous} className="mr-6 btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
