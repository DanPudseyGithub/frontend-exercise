"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";

type Category = {
  slug: string;
  name: string;
};

type Product = {
  id: string | number;
  category: string;
};

type ProductLayoutProps = {
  categories: Category[];
  products: Product[];
};

export const ProductLayout = ({ categories, products }: ProductLayoutProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // When the search changes, set a search term
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // When the checkbox changes, update the selected categories
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryValue = event.target.value;
    setSelectedCategories(
      (prevSelected) =>
        prevSelected.includes(categoryValue)
          ? prevSelected.filter((category) => category !== categoryValue) // Remove category if already selected
          : [...prevSelected, categoryValue] // Add category if not selected
    );
  };

  // Filter the categories based on the search term
  const filteredCategories = categories.filter((category: any) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter the products based on the selected categories
  const filteredProducts = products.filter(
    (product: any) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true // Include all products if no categories are selected
  );

  return (
    <div className="flex justify-center">
      <div className="w-full p-2 md:grid md:gap-8 md:grid-cols-4">
        <div className="col-span-1 p-1 md:sticky md:self-start md:top-0">
          <h1 className="font-bold mb-2">Products</h1>
          <p className="mb-6">Browse the range of our latest items</p>
          <input
            type="text"
            placeholder="Search categories"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mb-4 p-2 border border-gray-400"
          />
          {filteredCategories && filteredCategories.length > 0 ? (
            <nav className="hidden md:block">
              <ul>
                {filteredCategories.map((category: any) => (
                  <li
                    className="border-t-2 border-grey-800 py-1 font-light flex items-center gap-2"
                    key={category.slug}
                  >
                    <input
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="checkbox"
                      value={category.slug}
                      onChange={handleCheckboxChange}
                      checked={selectedCategories.includes(category.slug)}
                    />
                    <a href={`#${category.slug}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <p>No categories available.</p>
          )}
        </div>
        <div className="col-span-3">
          <div className="grid gap-2">
            {filteredCategories && filteredCategories.length > 0 ? (
              filteredCategories.map((category: any) => (
                <section
                  key={category.slug}
                  className="grid gap-2 pb-4"
                  id={category.slug}
                >
                  <h2 className="font-light text-2xl">{category.name}</h2>
                  <div className="md:grid md:gap-2 md:grid-cols-3">
                    {filteredProducts
                      .filter(
                        (product: any) => product.category === category.slug
                      )
                      .map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </section>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
