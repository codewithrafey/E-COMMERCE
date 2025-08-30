import React from 'react'
import { category } from '../../assets/all_product'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ShopByCategory() {
  return (
    <div className='py-10 px-4 sm:px-12 lg:px-24 xl:px-40'>
        <div className="flex flex-col gap-1.5 items-center justify-center">
            <h1 className='text-[32px] font-bold'>Shop by Category</h1>
            <p className='text-gray-600'>Discover our curated collections for every style and occasion</p>
        </div>
        <div className="relative w-full flex md:flex-row flex-col justify-center items-center gap-8 py-9">
            {category.map((category, index)=>{
                return (
                <div key={index} className="relative w-full sm:w-[320px] h-[220px] overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                    <img loading='lazy' src={category.image} className='rounded-xl transition-transform duration-300 group-hover:scale-110' alt={category.title} />
                    <div className="absolute inset-0 bg-black/20 rounded-xl shadow-lg"></div>
                    <div className="absolute inset-0 flex flex-col justify-end text-white px-6 pb-5">
                        <h3 className='text-[22px] font-bold mb-1'>{category.name}</h3>
                        <p className='text-sm text-gray-50 mb-2'>{category.productCount}+ items available</p>
                        <Link to={`/${category.name.toLocaleLowerCase()}`} className='flex justify-center items-center font-semibold gap-3 text-[12px] bg-white text-black w-fit px-1.5 py-2 rounded hover:bg-white/90 transition cursor-pointer'>Shop Now <FaArrowRight /></Link>
                    </div>
                </div>
                )
            })}
        </div>
<div className="py-4">
  <hr className="border-gray-300" />
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-9 px-4 sm:px-12 text-center py-10">
  <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold">500+</h1>
    <p className="text-sm text-gray-500">Products</p>
  </div>
  <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold">50K+</h1>
    <p className="text-sm text-gray-500">Happy Customers</p>
  </div>
  <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold">24/7</h1>
    <p className="text-sm text-gray-500">Customer Support</p>
  </div>
  <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold">99%</h1>
    <p className="text-sm text-gray-500">Satisfaction Rate</p>
  </div>
</div>
    </div>
  )
}

export default ShopByCategory