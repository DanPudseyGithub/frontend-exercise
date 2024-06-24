import type { Product } from "../Types/Product";

// Function can return null if an API error occurs, so I've added this into the type checking
export const fetchProducts = async (): Promise<Product[] | null> => {
  // Added error handling so if the API fails we can log the error
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=999`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // Or handle the error as needed
  }
};
