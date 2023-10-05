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

const Menu = ({showCatMenu,setShowCatMenu}) => {
  return (
  <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
  {
    data.map((item)=>{
        return (
            <Fragment key={item?.id}>
              {!!item?.subMenu ? (<li className='cursor-pointer flex items-center gap-2 relative' onMouseEnter={()=>setShowCatMenu(true)} onMouseLeave={()=>setShowCatMenu(false)}>{item?.name}
              <BsChevronDown size={14}/>
              {
                showCatMenu && (
                    <ul className='bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg'>
                        {subMenuData.map((item)=>{
                            return (
                                <Link href={item?.path} key={item.id} onClick={()=>setShowCatMenu(false)}><li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>{item?.name}
                               </li></Link>
                            )
                        })}
                    </ul>
                )
              }
              </li>):
              (<Link href={item?.url}><li className='cursor-pointer'>{item.name}</li></Link>)}
            </Fragment>
        )
    })
  }
  </ul>
  )
}

export default Menu