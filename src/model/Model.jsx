import React from "react";
import { IoMdClose } from "react-icons/io";
import logo from '../assets/logo_white.png'
import { Link } from "react-router-dom";

function Model({ modelStatus, setModelStatus }) {
  if (!modelStatus) return null;

  const closeModal = () => setModelStatus(false);
  
  const exploreCollection = () => {
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-md">
        <button
          className=" absolute top-4 left-4 hover:text-red-500 text-gray-500 text-xl cursor-pointer z-10"
          onClick={closeModal}
        >
          <IoMdClose/>
        </button>
        
        {/* Fashion badge */}
        <div className="absolute top-0 right-0 bg-red-600 text-white font-bold px-4 py-1 text-sm transform rotate-12">
          TRENDING
        </div>
        
        {/* Header section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 text-center -mx-6 -mt-6 rounded-t-lg">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto overflow-hidden">
            <img src={logo} alt="" />
          </div>
          <h1 className="text-2xl font-bold mt-4">MEN'S FASHION</h1>
          <p className="text-gray-300 mt-2">Premium Clothing & Accessories</p>
        </div>
        
        {/* Content section */}
        <div className="pt-6">
          <div className="bg-red-600 text-white text-sm font-bold inline-block px-4 py-1 mb-4 transform -rotate-3">
            LIMITED TIME OFFER
          </div>
          
          <h2 className="text-xl font-bold text-gray-800">Exclusive Collection Launch</h2>
          <p className="text-gray-600 mt-1">
            Discover our new premium line of men's fashion with special introductory prices.
          </p>
          
          <div className="grid grid-cols-3 gap-2 my-4">
            <div className="bg-gray-100 p-2 rounded text-center">
              <i className="fas fa-tag text-red-500"></i>
              <p className="text-xs font-bold mt-1">UP TO 40% OFF</p>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center">
              <i className="fas fa-truck text-red-500"></i>
              <p className="text-xs font-bold mt-1">FREE SHIPPING</p>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center">
              <i className="fas fa-gift text-red-500"></i>
              <p className="text-xs font-bold mt-1">GIFT WRAPPING</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex justify-center items-start mt-4">
            <p className="text-sm text-blue-800">
              Visit our store to explore the complete collection of premium men's wear and accessories.
            </p>
          </div>
        </div>
        
        {/* Action buttons */}
          <Link to={'/product'}>
        <div className="flex  mt-4">
          <button
            onClick={exploreCollection}
            className="flex-1 bg-[#3a88a1] hover:bg-[#4a97b1] text-white font-medium py-3 cursor-pointer rounded transition duration-200"
            >
            Explore Collection
          </button>
        </div>
            </Link>
        
        {/* Footer */}
        <div className="bg-gray-100 text-center text-xs text-gray-500 p-3 -mx-6 -mb-6 mt-4">
          <p>© {new Date().getFullYear()} MEN'S FASHION. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Model;