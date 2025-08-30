import { createContext, useState } from "react";
import { products } from "../assets/all_product";

export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for(let index = 0; index <= products.length+1; index++){
    cart[index] = 0;
  } 
  return cart;
}

function ContextProvider(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
    
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    
  }
  const totalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        const itemInfo = products.find((product) => product.id == items)
        totalAmount += itemInfo.price * cartItems[items];
      }
    }
    return totalAmount;
  }
  const totalCartItems = () => {
    let totalItem = 0
    for(const items in cartItems){
      if(cartItems[items] > 0){
        totalItem += 1
      }
    }
    return totalItem
  }


  const contextValue = { cartOpen, setCartOpen, products, addToCart, removeFromCart, cartItems, totalCartItems, totalAmount};

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
