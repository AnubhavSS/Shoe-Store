import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const ProductCard = ({cardInfo}) => {
  return (
    <Link
            href={`/product/${cardInfo?.title}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
       
         <Image
                width={300}
                height={300}
                src={cardInfo?.image}
                alt={cardInfo?.title}
                className='h-[20vh] mx-auto'
            />
        <div class="mt-4 text-center">
        <h2 class="text-gray-900 title-font text-lg font-medium">{cardInfo?.company}</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">{cardInfo?.title}</h2>
          <p class="mt-1"> ₹ {cardInfo?.price}</p>
        </div>
     
    </Link>
  )
}

export default ProductCard