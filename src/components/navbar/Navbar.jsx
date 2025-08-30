import React, { useContext, useState } from "react";
import { RxPerson } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../context/Context";
import { LuShoppingBag } from "react-icons/lu";
import logo from "../../assets/logo (1).png";

function Navbar() {
  const Location = useLocation();
  const currentPath = Location.pathname;
  const [openMenu, setOpenMenu] = useState(false);

  const {
    products,
    cartItems,
    cartOpen,
    setCartOpen,
    totalCartItems,
    addToCart,
    removeFromCart,
  } = useContext(Context);

  return (
    <div className="flex justify-between bg-white/95 backdrop:blur-xl items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-3 shadow-md sticky top-0 z-30">
      <div className="flex items-center justify-center gap-4">
        <HiMenuAlt1
          onClick={() => setOpenMenu(true)}
          className="sm:hidden text-2xl font-bold"
        />
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-2">
            <img src={logo} className="w-10 h-10" alt="" />
            <h1 className="text-xl font-bold items-center cursor-pointer">
              MEN'S FASHION
            </h1>
          </div>
        </Link>
      </div>

      {openMenu && (
        <div
          className="max-sm:fixed sm:hidden inset-0 bg-black/60 z-30"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}
      <ul
        className={`flex gap-6 text-sm font-medium max-sm:fixed max-sm:flex-col max-sm:min-h-min max-sm:h-full ${
          !openMenu ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"
        } max-sm:bg-white max-sm:text-black top-0 bottom-0 left-0 max-sm:pt-20 z-40 transition-all `}
      >
        <div className="absolute top-4 left-4 right-4 sm:hidden flex justify-between items-center">
          <Link to={"/"}>
            <h1
              className={`text-xl font-bold cursor-pointer ${
                openMenu === false ? "opacity-0" : "duration-500"
              }`}
            >
              MEN'S FASHION
            </h1>
          </Link>
          <IoMdClose onClick={() => setOpenMenu(false)} className=" text-2xl" />
        </div>
        <Link to={"/"}>
          <li
            onClick={() => setOpenMenu(false)}
            className={`cursor-pointer max-sm:w-fit hover:text-[#3a88a1] ${
              currentPath === "/"
                ? "text-[#3a88a1] border-b-2 border-[3a88a1] pb-0.5"
                : "text-black"
            }`}
          >
            Home
          </li>
        </Link>
        <Link to={"/clothing"}>
          <li
            onClick={() => setOpenMenu(false)}
            className={`cursor-pointer max-sm:w-fit hover:text-[#3a88a1] ${
              currentPath === "/clothing"
                ? "text-[#3a88a1] border-b-2 border-[3a88a1] pb-0.5"
                : "text-black"
            }`}
          >
            Clothing
          </li>
        </Link>
        <Link to={"/shoes"}>
          <li
            onClick={() => setOpenMenu(false)}
            className={`cursor-pointer max-sm:w-fit hover:text-[#3a88a1] ${
              currentPath === "/shoes"
                ? "text-[#3a88a1] border-b-2 border-[3a88a1] pb-0.5"
                : "text-black"
            }`}
          >
            Shoes
          </li>
        </Link>
        <Link to={"/accessories"}>
          <li
            onClick={() => setOpenMenu(false)}
            className={`cursor-pointer max-sm:w-fit hover:text-[#3a88a1] ${
              currentPath === "/accessories"
                ? "text-[#3a88a1] border-b-2 border-[3a88a1] pb-0.5"
                : "text-black"
            }`}
          >
            Accessories
          </li>
        </Link>
      </ul>
      <div className="flex space-x-5">
        <Link to={"/login"}>
          <div
            className={`p-2 hover:bg-gray-200 hover:text-[#3a88a1] text-md font-medium rounded cursor-pointer ${
              currentPath === "/login" ? "bg-gray-200 text-[#3a88a1]" : ""
            }`}
          >
            <RxPerson className="font-bold" />
          </div>
        </Link>
        <div
          onClick={() => setCartOpen(true)}
          className={`p-2 hover:bg-gray-200 hover:text-[#3a88a1] text-md font-medium rounded relative cursor-pointer ${
            currentPath === "/cart" ? "bg-gray-200 text-[#3a88a1]" : ""
          }`}
        >
          <FiShoppingCart />
          <div className="absolute h-[18px] w-[18px] flex items-center justify-center bg-black -top-1.5 -right-1 text-white rounded-full text-xs">
            {totalCartItems()}
          </div>
        </div>
      </div>
      {/* Overlay + Sidebar Cart */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-96 max-sm:w-70 bg-white text-black z-40 transform transition-transform duration-300 
    ${cartOpen ? "translate-x-0 " : "translate-x-full"}`}
      >
        {/* cart header */}
        <div className="bg-[#3a88a1] text-white flex py-3 items-center justify-between px-3">
          <div className="flex justify-between items-center gap-2">
            <LuShoppingBag className="text-xl" />
            <h2 className="text-xl font-semibold ">Shopping Cart</h2>
          </div>
          <IoMdClose
            onClick={() => setCartOpen(false)}
            className="text-xl cursor-pointer"
          />
        </div>

        {/* cart items */}
        <div className="h-[calc(100%-150px)] overflow-y-auto px-3 py-4">
          {Object.values(cartItems).some((qyt) => qyt > 0) ? (
            products.map((e, i) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div key={i} className="px-3 py-3 border-b border-gray-200">
                    <div className="flex gap-4 items-start">
                      <div className="flex justify-center item-center overflow-hidden border border-gray-200 rounded">
                        <img
                          loading="lazy"
                          src={e.image}
                          className="w-20 h-16 object-cover"
                          alt={e.name}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">{e.name}</p>
                          <IoMdClose
                            onClick={() => {
                              removeFromCart(e.id);
                            }}
                            className="cursor-pointer text-gray-500 hover:text-red-500"
                          />
                        </div>
                        {/* Quantity control */}
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => {removeFromCart(e.id)}} className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                            -
                          </button>
                          <input
                            type="text"
                            value={cartItems[e.id]}
                            readOnly
                            className="w-8 text-center border boder-gray-500 rounded"
                          />
                          <button onClick={() => {addToCart(e.id)}} className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                            +
                          </button>
                        </div>
                        <p className="text-sm mt-1">
                          {cartItems[e.id]} x{" "}
                          <span className="font-bold">Rs {e.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <div className="flex flex-col gap-3 h-full justify-center items-center">
              <LuShoppingBag className="text-6xl max-sm:text-5xl text-gray-500" />
              <h3 className="text-md font-bold">Your cart is empty</h3>
              <p className="text-sm text-gray-500">
                Add some products to get started!
              </p>
              <Link to={"/product"}>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-xs py-1.5 px-4 rounded text-white bg-gray-950 hover:bg-gray-950/90 cursor-pointer"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* subtotal */}
        {Object.values(cartItems).some((qyt) => qyt > 0) && (
          <div className="absolute bottom-0 w-full px-4 py-3 border-gray-300 border-t bg-white">
            <div className="flex justify-between mb-3">
              <p className="text-md font-medium text-gray-900">SUBTOTAL:</p>
              <p className="font-semibold">
                Rs{" "}
                {products.reduce((total, e) => {
                  return (
                    total +
                    (cartItems[e.id] > 0 ? cartItems[e.id] * e.price : 0)
                  );
                }, 0)}
              </p>
            </div>
            <Link to={"/cart"}>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full py-2 mb-2 bg-[#3a88a1] hover:bg-[#34748a] text-white rounded font-medium"
              >
                VIEW CART
              </button>
            </Link>
            <button className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded font-medium">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
