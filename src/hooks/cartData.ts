import { useState } from "react";

export const [cartItems, setCartItems] = useState<number[]>(JSON.parse(sessionStorage.getItem("cartItems") || "[]"));

// Function to update cartItems array and store it in sessionStorage or localStorage
export const updateCartItems = (newCartItems: number[]) => {
  setCartItems(newCartItems);
  sessionStorage.setItem("cartItems", JSON.stringify(newCartItems));
  // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};