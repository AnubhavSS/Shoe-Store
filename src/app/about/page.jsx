"use client"

import React from 'react'
import Link from 'next/link'
import Lottie from 'lottie-react'
import shoe_ani from './shoe_ani.json'


const About = () => {
  return (
    <section className="flex items-center bg-stone-100 h-[95vh] font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className=" px-4 mb-4  lg:w-1/2 lg:mb-0">
                    <Lottie animationData={shoe_ani} loop={true}/>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <h2 className="mb-4 text-4xl font-semibold text-purple-500 dark:text-gray-300">
                        About Us
                    </h2>
                    <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    At Shoe Street, we are passionate about footwear. Our mission is to provide you with
            the latest and trendiest shoe collections for every occasion. Whether you're looking for
            sneakers, boots, or sandals, we've got you covered. Explore our wide range of high-quality
            shoes and step out in style.
                    </p>
                    <Link href='/'
                        className="px-4 py-3 text-purple-700 transition-all transform border border-purple-500 rounded-3xl hover:bg-purple-600 dark:border-purple-400 dark:hover:bg-purple-500 dark:hover:text-gray-100 dark:hover:border-purple-500 dark:text-purple-400 hover:text-gray-100">
                        Discover more
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About