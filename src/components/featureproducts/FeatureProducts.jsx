import React, { useContext } from 'react'
import { feature } from '../../assets/all_product'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Links } from 'react-router-dom';
import { Context } from '../../context/Context';

function FeatureProducts() {

  const {addToCart,setCartOpen} = useContext(Context)

  return (
    <div className='bg-gray-50 py-10 px-4 sm:px-12 lg:px-24 xl:px-40'>
      <div className="flex flex-col gap-1.5 items-center justify-center mb-8">
        <h1 className='text-[32px] font-bold'>Feature Products</h1>
        <p className='text-gray-600'>Check out our most popular items</p>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {feature.map((feature, index) => {
          const fullStars = Math.floor(feature.rating);   // e.g. 4
          const hasHalfStar = feature.rating % 1 >= 0.5; // e.g. true if 4.5+
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

          // Calculate discount percentage
          const discount = feature.originalPrice && feature.originalPrice > feature.price
            ? Math.round(((feature.originalPrice - feature.price) / feature.originalPrice) * 100)
            : 0;

          return (
            <div 
              key={index} 
              className="group flex flex-col gap-2 bg-white shadow hover:shadow-xl rounded-lg overflow-hidden cursor-pointer relative"
            >
              {/* Image Wrapper */}
              <div className="h-[200px] overflow-hidden relative">
               <div className="flex h-full justify-center items-center">
                <img 
                loading='lazy'
                  src={feature.image} 
                  alt="" 
                  className="w-[180px] object-cover transition-transform duration-300 group-hover:scale-105" 
                />
            </div>
                {/* Discount Badge */}
                {discount > 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-0.5 rounded text-white text-xs font-medium">
                    {discount}% OFF
                  </div>
                )}
              </div>
              
              {/* Product info */}
              <div className="p-3">
                {/* name */}
                <p className="text-sm font-bold">{feature.name}</p>
                
                {/* Rating */}
                <div className="flex items-center">
                  {/* Full Stars */}
                  {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="w-4 h-4 text-yellow-400" />
                  ))}
                  {/* Half Star */}
                  {hasHalfStar && <FaStarHalfAlt className="w-4 h-4 text-yellow-400" />}
                  {/* Empty Stars */}
                  {[...Array(emptyStars)].map((_, i) => (
                    <FaStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                  ))}

                  <span className="text-sm text-gray-500 ml-1">({feature.reviews})</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-lg font-bold text-black">Rs {feature.price.toLocaleString()}</p>
                    {discount > 0 && (
                      <p className="text-gray-500 text-sm line-through">Rs {feature.originalPrice.toLocaleString()}</p>
                    )}
                  </div>
                  {/* <Link to={`/product/${Number(feature.id)}`}> */}
                  <div onClick={() => {addToCart(Number(feature.id)); setCartOpen(true);}} className=" bg-gray-100 hover:bg-[#3a88a1] text-[#3a88a1] hover:text-white cursor-pointer transition-all duration-200 p-3 rounded-full text-center">
                    <FiShoppingCart className='' />
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* View all btn */}
      <div className="text-center">
        <button className='px-6 py-2 bg-gray-950 hover:bg-black/85 mt-9 text-white rounded text-sm cursor-pointer'>
          <Link to='/product'>View All Products</Link>
        </button>
      </div>
    </div>
  )
}

export default FeatureProducts
