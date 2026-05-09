import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const ProductCard = ({cardInfo}) => {
  console.log(cardInfo);
  return (
    <Link
            href={`/product/${cardInfo?.title}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 border-2 border-shadow border-gray-300 rounded-xl cursor-pointer shadow-md hover:shadow-lg"
        >
       
         <Image
                width={300}
                height={300}
                src={cardInfo?.image}
                alt={cardInfo?.title}
                className='h-[25vh] mx-auto w-full overflow-hidden'
            />
        <div className="mt-4 text-center">
        <h2 className="text-gray-900 title-font text-lg font-medium">{cardInfo?.company}</h2>
          <h2 className="text-gray-900 title-font text-lg font-medium">{cardInfo?.title}</h2>
          <p className="mt-1"> ₹ {cardInfo?.price}</p>
        </div>
     
    </Link>
  )
}

export default ProductCard