import { Category } from "../Types/Category";

// Function can return null if an API error occurs, so I've added this into the type checking
export const fetchCategories = async (): Promise<Category[] | null> => {
  // Added error handling so if the API fails we can log the error
  try {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const categories: Category[] = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
