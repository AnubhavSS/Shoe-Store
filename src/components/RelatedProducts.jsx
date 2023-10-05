"use client"

import React,{useState,useEffect} from "react";
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

  const [cardInfo, setcardInfo] = useState([])


  useEffect(() => {
    // Define an async function to fetch data from the API
    async function fetchData() {
      try {
        // Send a GET request to the specified API endpoint (baseUrl + '/api/getProducts')
        const response = await fetch(`http://localhost:3000` + '/api/getProducts');

        // Check if the response status is OK (status code 200)
        if (response.ok) {
          // Parse the JSON response data
          const data = await response.json();
          // console.log(data); // Log the fetched data to the console
          setcardInfo(data)
        } else {
          // Handle the case where the response status is not OK
          console.error('Failed to fetch data');
        }
      } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('An error occurred:', error);
      }
    }

    // Call the fetchData function to initiate the data fetch when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel
      focusOnSelect={true}
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
            >
              { cardInfo.map((item)=>
            <ProductCard cardInfo={item} key={item._id}/>)}
            </Carousel>
      
    </div>
  );
};

export default RelatedProducts;
