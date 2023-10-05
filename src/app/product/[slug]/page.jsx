"use client"
import React,{useState,useEffect} from "react";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../../../store/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const size=["India-6","India-7","India-8","India-9","India-10",]


const ProductDetails = ({params}) => {
  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()


const [cardInfo, setcardInfo] = useState([]);
const [sizeSelected, setsizeSelected] = useState('')

  useEffect(() => {
    // Define an async function to fetch data from the API
    async function fetchData() {
      try {
        // Send a GET request to the specified API endpoint (baseUrl + '/api/getProducts')
        const response = await fetch(
          "http://localhost:3000" + `/api/getOneProduct?title=${params?.slug}`
        );

        // Check if the response status is OK (status code 200)
        if (response.ok) {
          // Parse the JSON response data
          const data = await response.json();
          console.log(data,"de"); // Log the fetched data to the console
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

const addToCartItem=(value)=>{
console.log(value)
  if(sizeSelected===''){
    toast.warn('Please select a size', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else{
    toast.success('Item added to cart successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  dispatch(addToCart({...value,size:sizeSelected,qty:1,totalAmt:value.price}))
}
}

  return (
    <div classNmae="w-full md:py-20">

<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column start */}
          <div className=" w-auto mt-5">
            <ProductDetailsCarousel img={cardInfo[0]?.image}/>
          </div>
          {/* Right column start */}

          {/* Right column start */}
          <div className="flex-auto py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {cardInfo[0]?.company}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-xl font-semibold mb-5">{cardInfo[0]?.title} | {cardInfo[0]?.category}</div>

            <p className="mr-2 text-lg font-semibold">MRP : &#8377;{cardInfo[0]?.price}</p>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-10">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-6">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                {/* <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div> */}
              </div>
              {/* HEADING END */}

              {/* Size Start */}
              <div className="grid grid-cols-3 gap-2">
                { size.map(item=>
                 <div key={item} className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${sizeSelected===item? 'bg-slate-300':'bg-slate-50'}`} onClick={()=>setsizeSelected(item)}>
                  {item}
                </div>
)}
              </div>
              {/* Size End */}

              {/* Error msg */}
             {/* {!sizeSelected && <div className=" text-red-600 mt-1">
                Size selection is required{" "}
              </div>} */}
            </div>
          
          {/* product size range end */}

          {/* Add to cart */}
          <button onClick={()=>addToCartItem(cardInfo[0])} className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
            Add to Cart
          </button>
                  
                  {/* whislist button */}
                  <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                        <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iste reprehenderit ea molestias in ratione cum fugiat dicta nobis a repellendus, pariatur velit animi ut optio vel natus ad quaerat.
                            </div>
                        </div></div>
          {/* Right column end */}
        </div>

<RelatedProducts/>

      </Wrapper>
    </div>
  );
};

export default ProductDetails;
