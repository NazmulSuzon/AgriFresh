"use client";
import React, { Component } from "react";
import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Portfolio = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto font-bold text-center mt-20">
      <p className="text-primary">Portfolio</p>
      <h1 className="text-6xl mt-2">We Have Done</h1>
      <div className="slider-container mt-10">
        <Slider {...settings}>
          <div className="zoom">
            <Link
              href="https://medium.com/@nhsuzon100/10-things-you-should-know-about-organic-food-6179a0f7d831"
              target="_blank"
            >
              <img src="assets/portfolio/1.webp" alt="img1" />
            </Link>
          </div>
          <div className="zoom">
            <Link
              href="https://medium.com/@nhsuzon100/10-things-you-should-know-about-organic-food-6179a0f7d831"
              target="_blank"
            >
              <img src="assets/portfolio/2.webp" alt="img2" />
            </Link>
          </div>
          <div className="zoom">
            <Link
              href="https://medium.com/@nhsuzon100/10-things-you-should-know-about-organic-food-6179a0f7d831"
              target="_blank"
            >
              <img src="assets/portfolio/3.webp" alt="img3" />
            </Link>
          </div>
          <div className="zoom">
            <Link
              href="https://medium.com/@nhsuzon100/10-things-you-should-know-about-organic-food-6179a0f7d831"
              target="_blank"
            >
              <img src="assets/portfolio/4.webp" alt="img4" />
            </Link>
          </div>
          <div className="zoom">
            <Link
              href="https://medium.com/@nhsuzon100/10-things-you-should-know-about-organic-food-6179a0f7d831"
              target="_blank"
            >
              <img src="assets/portfolio/5.webp" alt="img5" />
            </Link>
          </div>
          <div className="zoom">
            <Link
              href="https://medium.com/@nhsuzon100/10-things-you-should-know-about-organic-food-6179a0f7d831"
              target="_blank"
            >
              <img src="assets/portfolio/6.webp" alt="img6" />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
