"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { baseUrl } from "@/app/page";

const Category = ({ params }) => {
  const [cardInfo, setcardInfo] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data from the API
    async function fetchData() {
      try {
        // Send a GET request to the specified API endpoint (baseUrl + '/api/getProducts')
        const response = await fetch(
          "http://localhost:3000" + `/api/getCategory?category=${params?.slug}`
        );

        // Check if the response status is OK (status code 200)
        if (response.ok) {
          // Parse the JSON response data
          const data = await response.json();
          // console.log(data); // Log the fetched data to the console
          setcardInfo(data);
        } else {
          // Handle the case where the response status is not OK
          console.error("Failed to fetch data");
        }
      } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error("An error occurred:", error);
      }
    }

    // Call the fetchData function to initiate the data fetch when the component mounts
    fetchData();
  }, []);

  return (
    <div className="w-full md:py-20 h-[100vh]">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {params?.slug.toUpperCase()} Shoes
          </div>
        </div>

        {/* product grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 px-5 md:px-0 ">
          {cardInfo &&
            cardInfo.map((item) => (
              <ProductCard cardInfo={item} key={item?._id} />
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
