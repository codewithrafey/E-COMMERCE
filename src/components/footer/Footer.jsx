import React, { useState } from 'react'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_white.png'

function Footer() {
  const [userEmail, setUserEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

const formHandler = (e) => {
  e.preventDefault();

  if (userEmail.trim() === '') {
    setError('Please fill the input');
    setSuccess('')
    setTimeout(() => setError(''), 3000); // Error message will clear after 2 seconds
    return;
  } else {
    setSuccess('Subscribed successfully');
    setError('')
    setTimeout(() => setSuccess(''), 3000); // Success message will clear after 2 seconds
  }

  setUserEmail(''); // Clear the input field after 2 seconds
}
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-900 py-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-2  items-center">
                <img src={logo} className='w-8 h-8' alt="" />
                <Link to={'/'}><h4 className='text-md font-bold text-white'>Men's Fashion</h4></Link>
              </div>
                <p className='text-sm text-gray-300'>Your premier destination for high-quality men's clothing, shoes, and accessories. Style meets comfort in every piece.</p>
            <div className="flex gap-5 text-sm mt-4 cursor-pointer">
                <div className="text-gray-300 p-2 hover:bg-gray-200 hover:text-black rounded-xl">
                <FiFacebook className='' />
                </div>
                <div className="text-gray-300 p-2 hover:bg-gray-200 hover:text-black rounded-xl">
                <FiTwitter />
                </div>
                <div className="text-gray-300 p-2 hover:bg-gray-200 hover:text-black rounded-xl">
                <FaInstagram />
                </div>
                <div className="text-gray-300 p-2 hover:bg-gray-200 hover:text-black rounded-xl">
                <FiYoutube />
                </div>
            </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-white text-md font-semibold mb-1'>Quick Links</h3>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/about'}>About Us</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/contact'}>Contact</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/blog'}>Blog</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/sizeguide'}>Size Guide</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/return&exchange'}>Returns & Exchanges</Link></p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-white text-md font-semibold mb-1'>Categories</h3>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>New Arrivals</p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/clothing'}>Clothing</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/shoes'}>Shoes</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/accessories'}>Accessories</Link></p>
                <p className='text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'><Link to={'/product'}>All Products</Link></p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-white text-md font-semibold mb-1'>Stay Connected</h3>
                <div className='text-sm text-gray-300 flex items-center gap-2'><span><MdOutlineEmail/></span> <p>rafeyshaikh57@gmailcom</p></div>
                <div className='text-sm text-gray-300 flex items-center gap-2'><span><FiPhone/></span> <p>+923120281155</p></div>
                <div className='text-sm text-gray-300 flex items-center gap-2'><span><MdOutlineLocationOn/></span> <p>Karachi</p></div>
                <div className="flex flex-col gap-2 mt-3">
                    <p className='font-semibold text-md text-white'>Newsletter</p>
                    <p className='text-[12px] text-gray-300'>Subscribe for exclusive deals and new arrivals</p>
                    <form onSubmit={(e) => formHandler(e)} className="flex gap-2">
                        <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" className='outline-none py-1.5 px-2 text-white placeholder:text-gray-500 rounded bg-gray-800 border border-gray-500 text-[12px]' placeholder='Enter your email' name="" id="" />
                        <button className='bg-black border border-black hover:bg-black/60 text-[12px] px-2 py-1.5 text-white font-semibold rounded cursor-pointer'>Subscribe</button>
                    </form>
                </div>
                {error && <small className='text-red-500 text-xs'>{error}</small>}
                {success && <small className='text-green-500 text-xs'>{success}</small>}
            </div>
        </div>
<hr className="my-8 border border-gray-700" />
        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Men's Fashion. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 text-sm">We Accept:</span>
            <div className="flex space-x-2 cursor-default">
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">VISA</div>
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">MC</div>
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">AMEX</div>
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">PAYPAL</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer