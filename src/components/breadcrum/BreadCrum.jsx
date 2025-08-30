import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function BreadCrum({ product }) {
    
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 px-4 sm:px-6 md:px-16 pt-4">
      <Link to={'/'}> <span className="cursor-pointer hover:text-[#3eb5dd]">HOME</span></Link>
      <IoIosArrowForward className="inline text-gray-400" />
      <Link to={`/${product.category.toLowerCase()}`}><span className="cursor-pointer hover:text-[#3eb5dd]">{product.category.toUpperCase()}</span></Link>
      <IoIosArrowForward className="inline text-gray-400" />
      <span className="font-semibold text-gray-800">{product.name.toUpperCase()}</span>
    </div>
  )
}

export default BreadCrum