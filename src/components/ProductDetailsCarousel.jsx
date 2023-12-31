"use client";

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ProductDetailsCarousel = ({img}) => {
  return (
    <div className="text-black text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] ">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel">
          <img src={img}/>
          <img src='../assets/slide2.jpg'/>
          <img src='../assets/slide3.jpg'/>
          </Carousel></div>
  )
}

export default ProductDetailsCarousel