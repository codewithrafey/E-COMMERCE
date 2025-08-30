import React from 'react'
import banner from '../../assets/banner_main.jpeg'
import HeroBanner from '../hero_banner/HeroBanner'
import { Link } from 'react-router-dom'

function hero() {
  return (
    <div className="">
<div className="relative w-full h-screen">
  {/* Banner Image */}
  <img 
  loading='lazy'
    src={banner} 
    className="w-full h-full object-cover" 
    alt="banner" 
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text Overlay */}
  <div className="absolute inset-0 flex gap-6 flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl max-sm:text-3xl font-bold">Men's Fashion World</h1>
    <p className="text-lg md:text-2xl max-sm:text-[15px]">Premium Quality Clothing, Shoes & Accessories</p>
    <div className="flex mt-2 gap-4">
        <button className='px-6 py-1.5 border border-gray-950 bg-gray-950 hover:bg-black/80 font-medium text-md max-sm:text-sm rounded cursor-pointer'>View New Collections</button>
        <button className='px-6 py-1.5 border border-white hover:bg-white hover:text-black font-medium text-md max-sm:text-sm rounded cursor-pointer'><Link to='/product'>All Products</Link></button>
    </div>
  </div>
  </div>
  <div className="px-4 sm:px-12 lg:px-24 xl:px-40">
    <HeroBanner /> 
  </div>
  <div className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 xl:px-40">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
    <div className="flex flex-col items-center">
        <div className="w-15 h-15 bg-black rounded-full flex items-center justify-center mb-4">
            <span className='text-xl'>🚚</span>
        </div>
        <h3 className="text-[18px] font-semibold mb-2">Free Delivery</h3>
        <p className="text-sm text-gray-600">On orders over $50</p>
    </div>
    <div className="flex flex-col items-center">
        <div className="w-15 h-15 bg-black rounded-full flex items-center justify-center mb-4">
            <span className='text-xl'>🔄</span>
        </div>
        <h3 className="text-[18px] font-semibold mb-2">Easy Return</h3>
        <p className="text-sm text-gray-600">7-day free return policy</p>
    </div>
    <div className="flex flex-col items-center">
        <div className="w-15 h-15 bg-black rounded-full flex items-center justify-center mb-4">
            <span className='text-xl'>🛡️</span>
        </div>
        <h3 className="text-[18px] font-semibold mb-2">Secure Payment</h3>
        <p className="text-sm text-gray-600">100% secure and easy payment</p>
    </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default hero