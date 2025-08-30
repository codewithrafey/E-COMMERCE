import React, { useContext } from 'react'
import { IoStar } from "react-icons/io5";
import { Context } from '../../context/Context';

function ProductPage({product}) {

  const {addToCart,setCartOpen} = useContext(Context)

if (!product) {
  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center">
      <p className="text-gray-500 text-sm font-medium">
        Loading product details...
      </p>
    </div>
  )
}

  return (
    <>
    <div className="productDisplay flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 md:gap-10 px-4 sm:px-6 md:px-16 lg-px-16 py-6">
      
      {/* LEFT IMAGES */}
      <div className="flex justify-start flex-col-reverse gap-3">
        
        {/* Thumbnail list */}
        <div className="productDisplay-imgList flex md:justify-between gap-4 sm:justify-between overflow-x-auto md:overflow-y-auto">
          {[1, 2, 3, 4].map((i) => (
            <img
            loading='lazy'
              key={i}
              src={product.image}
              className="w-18 sm:w-30 md:w-35 lg:w-30 lg:h-25 object-cover border border-gray-300 cursor-pointer"
              alt={`thumb-${i}`}
            />
          ))}
        </div>

        {/* Main image with zoom effect */}
        <div className="flex-1 flex justify-center item-center overflow-hidden border border-gray-300">
          <img
          loading='lazy'
            src={product.image}
            className="md:w-[500px] md:h-[500px] lg:h-[500px] overflow-hidden object-contain transition-transform duration-500 ease-in-out hover:scale-110"
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="productDisplay-right flex-1 space-y-4 mt-6 md:mt-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-gray-800">
          {product.name}
        </h1>
          {/* Rating */}
        <div className="flex items-center gap-2">
          <IoStar className="text-yellow-400 text-xl"/>
          <IoStar className="text-yellow-400 text-xl"/>
          <IoStar className="text-yellow-400 text-xl"/>
          <IoStar className="text-yellow-400 text-xl"/>
          <IoStar className="text-yellow-400 text-xl opacity-25"/>
          <p>(122)</p>
        </div>
        

        {/* Price */}
        <div className="flex items-center gap-5">
          <span className="text-lg sm:text-xl md:text-xl font-semibold text-black">
            <span className='font-bold'>Rs</span> {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              {product.orignialPrice}
            </span>
          )}

        </div>
        <p className=" text-sm text-gray-500 lg:w-3/4">
          {product.description || "Upgrade your wardrobe with our stylish type of clothing, made from high-quality [fabric/material] ."}
        </p>
        {/* Size Options */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-4">Available Sizes:</h3>
            <div className="flex gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="border rounded px-5 py-3 text-sm bg-gray-50 border-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}               

        {/* Add to Cart Button */}
        <button onClick={() => {addToCart(product.id); setCartOpen(true);}}  className="bg-[#3a88a1] hover:bg-[#4a97b1] text-white px-4 sm:px-6 py-2 ounded shadow transition cursor-pointer">
          Add to Cart
        </button>

        {/* category */}
        <div className="">
        <div className="text-md text-black mt-4 font-bold">
          Category : <span className="text-gray-800 font-medium">{product.category.charAt(0).toUpperCase() +product.category.slice(1)}</span>
        </div>
        <div className="text-md font-bold">
          Tags : <span className="text-gray-800 font-medium capitalize">modern, latest</span>
        </div>
        </div>
      </div>
    </div>

</>

  );
}

export default ProductPage