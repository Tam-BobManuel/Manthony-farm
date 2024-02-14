export const cartItems: number[] = JSON.parse(sessionStorage.getItem("cartItems") || "[]");

// Function to update cartItems array and store it in sessionStorage or localStorage
export const updateCartItems = (newCartItems: number[]) => {
  sessionStorage.setItem("cartItems", JSON.stringify(newCartItems));
  // localStorage.setItem("cartItems", JSON.stringify(newCartItems));
};
