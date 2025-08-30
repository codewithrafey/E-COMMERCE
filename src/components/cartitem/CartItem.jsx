import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { TiDeleteOutline } from "react-icons/ti";

function CartItems() {
  const {  products, cartItems, addToCart, removeFromCart, totalAmount } = useContext(Context)

if (!cartItems || Object.values(cartItems).every(qty => qty === 0)) {
  return (
    <div className="flex flex-col items-center justify-center py-36 gap-4">
      <h1 className='text-3xl font-semibold uppercase'>Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  );
}
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 pb-6">
      {/* Header */}
      <h1 className='text-center text-4xl font-bold uppercase py-12'>Cart</h1>
      <div className="hidden sm:grid grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr] items-center gap-15 text-gray-700 py-4 border-b border-t border-gray-300">
        <div className="flex items-center   gap-15">
        <p className=''>Remove</p>
        <p className=''>Products</p>
        </div>
        <p className=''>Title</p>
        <p className=''>Price</p>
        <p className=''>Quantity</p>
        <p className=''>Total</p>
      </div>

      {/* Cart Items */}
      {products.map((e,i) => {
        if (cartItems[e.id] > 0) {  // ✅ Corrected here
          return (
            <div key={i} className="flex flex-col sm:grid sm:grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr] items-start sm:items-center gap-4 sm:gap-15 py-4 max-sm:border-b border-gray-400">
              <div className="flex items-center justify-between w-full max-sm:flex-row-reverse gap-2 sm:gap-15 ">
                {/* Remove */}
              <button 
                onClick={() => {removeFromCart(e.id)}} 
                className="text-red-500 hover:text-red-700 sm:w-15 flex justify-center cursor-pointer"
                >
                <TiDeleteOutline size={20} />
              </button>

              {/* Product Image */}
              <div className=" overflow-hidden border border-gray-300 max-sm:flex max-sm:items-center max-sm:justify-center">
              <img src={e.image} alt={e.name} className="w-30 h-30 sm:h-18 sm:w-18" />
              </div>
                </div>

              {/* Product Title */}
              <p className='text-gray-600 text-sm'>{e.name}</p>

              {/* Price */}
              <div className="flex sm:block justify-between w-full">
                <span className="sm:hidden font-medium">Price:</span>
                <p className='text-gray-600 text-sm'>Rs {e.price}</p>
              </div>
              {/* Quantity */}
              <div className="flex sm:block justify-between w-full">
                <span className="sm:hidden font-medium">Qty:</span>
                <div className="flex items-center gap-2 border w-fit rounded border-gray-300">
                  <button 
                    onClick={() => removeFromCart(e.id)} 
                    className="py-1 px-3 text-gray-400 hover:text-gray-500 cursor-pointer"
                  >
                    -
                  </button>
                  <span>{cartItems[e.id]}</span>
                  <button 
                    onClick={() => addToCart(e.id)} 
                    className="py-1 px-3 text-gray-400 hover:text-gray-500 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Total */}
              <div className="flex sm:block justify-between w-full">
                <span className="sm:hidden font-medium">Total:</span>
                <p className='text-gray-600 text-sm'>Rs {e.price * cartItems[e.id]}</p>
              </div>
            </div>
          )
        }
        return null
      })}
      <div className="py-14">
          <h1 className='uppercase font-bold text-3xl pb-2'>Cart Total</h1>
        <div className="flex flex-wrap gap-40">
          <div className="w-full max-w-md ">
            <div className="flex justify-between items-center py-3">
              <p className=''>Subtotal:</p>
              <p className=''>Rs {totalAmount()}</p>
            </div>
            <div className="flex justify-between items-center py-3">
              <p className=''>Shipping Free:</p>
              <p className=''>Free</p>
            </div>
            <div className="flex justify-between items-center py-3">
              <p className='font-bold'>Total:</p>
              <p className='font-bold'>Rs {totalAmount()}</p>
            </div>
            <div className="py-2">
            <button className='bg-[#3a88a1] hover:bg-[#4a97b1] rounded text-white py-3 px-8 text-sm cursor-pointer'>PROCCED TO CHECKOUT</button>
            </div>
          </div>
          <div className="flex-1 md:block flex flex-col justify-center items-center">
            <h1 className='text-2xl font-bold pb-4 uppercase'>Apply Coupon</h1>
            <p>If you have a Prome Code , Enter it here</p>
          <div className='flex flex-1 justify-between text-sm mt-6 w-full max-w-md overflow-hidden'>
          <input type="email" placeholder='Promo Code' className='px-4 py-[14px] bg-gray-100 outline-none w-full'/>
          <button className='bg-[#3a88a1] hover:bg-[#4a97b1] text-white px-8 py-[14px] cursor-pointer'>Submit</button>
        </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItems
