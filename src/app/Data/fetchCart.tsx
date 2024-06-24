import type { Cart } from "../Types/Cart";

// Function can return null if an API error occurs, so I've added this into the type checking
export const fetchCart = async (): Promise<Cart | null> => {
  // Added error handling so if the API fails we can log the error
  try {
    const response = await fetch(`https://dummyjson.com/carts/1`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const cart: Cart = await response.json();
    return cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return null;
  }
};
