"use client"
import React,{useState,useEffect} from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchData } from "./service";
// export const baseUrl=window.location.href

export default function Home() {

  const [cardInfo, setcardInfo] = useState([])


  useEffect(() => {
    // Define an async function to fetch data from the API
    
    async function fetchdata() {
      try {
        // Send a GET request to the specified API endpoint (baseUrl + '/api/getProducts')
        const data = await fetchData();

        // Check if the response status is OK (status code 200)
        
          // Parse the JSON response data
         
          console.log(data); // Log the fetched data to the console
          setcardInfo(data)
       
      } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('An error occurred:', error);
      }
    }

    // Call the fetchData function to initiate the data fetch when the component mounts
    fetchdata();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <main className="min-h-[100vh]">
      <HeroBanner />
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Cushion in your miles</div>
          <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
        </div>
          {/* Heading and paragraph end */}

          {/* product grid start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
          { cardInfo?.map((item)=>
            <ProductCard cardInfo={item}/>)}
          
          </div>
      </Wrapper>
    </main>
  );
}
