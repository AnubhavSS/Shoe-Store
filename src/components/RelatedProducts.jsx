"use client";
import { fetchData } from "../app/service.js";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const [cardInfo, setcardInfo] = useState([]);

 useEffect(() => {
  async function fetchRelatedProducts() {
    try {
      const data = await fetchData();

    

      setcardInfo(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  fetchRelatedProducts();
}, []);

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      {cardInfo.length > 0 && (
        <Carousel
          focusOnSelect={true}
          responsive={responsive}
          containerClass="-mx-[10px]"
          itemClass="px-[10px]"
        >
          {cardInfo.map((item) => (
            <ProductCard cardInfo={item} key={item._id} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default RelatedProducts;
