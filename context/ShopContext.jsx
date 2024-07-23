import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getTotalCartAmount = (cartItems) => {
  let total = 0;
  all_product.forEach((product) => {
    const quantity = cartItems[product.id];
    if (quantity > 0) {
      total += product.new_price * quantity;
    }
  });
  return total.toFixed(2); // Ensures total amount is formatted to two decimal places
};

const getTotalCartItems = (cartItems) => {
  let totalItems = 0;
  Object.values(cartItems).forEach(quantity => {
    totalItems += quantity;
  });
  return totalItems;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount: () => getTotalCartAmount(cartItems),
    getTotalCartItems: () => getTotalCartItems(cartItems)
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
