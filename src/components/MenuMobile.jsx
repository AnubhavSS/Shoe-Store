import React, { Fragment } from 'react'
import Link from 'next/link';
import {BsChevronDown} from 'react-icons/bs'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", path:"/category/jordan" },
    { id: 2, name: "Sneakers",  path:"/category/sneaker" },
    { id: 3, name: "Sports shoes",  path:"/category/sports" },
    { id: 4, name: "Football shoes",  path:"/category/football" },
];

const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu}) => {
  return (
  <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white text-black border-t'>
  {
    data.map((item)=>{
        return (
            <Fragment key={item?.id}>
              {!!item?.subMenu ? (<li className='cursor-pointer py-4 px-5 border-b flex flex-col relative'  onClick={()=>setShowCatMenu(!showCatMenu)}>{item?.name}
             <div className='flex justify-between items-center'> <BsChevronDown size={14}/></div>
              {
                showCatMenu && (
                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                        {subMenuData.map((item)=>{
                            return (
                                <Link href={item?.path} key={item.id} onClick={()=>{setShowCatMenu(false); setMobileMenu(false)}}>
                                    <li className='py-4 px-8 border-b flex justify-between'>{item?.name}
                                <span className='opacity-50 text-sm'>{item?.doc_count}</span></li></Link>
                            )
                        })}
                    </ul>
                )
              }
              </li>):
              (<Link href={item?.url} onClick={()=>setMobileMenu(false)}><li className='py-4 px-5 border-b'>{item.name}</li></Link>)}
            </Fragment>
        )
    })
  }
  </ul>
  )
}

export default MenuMobile