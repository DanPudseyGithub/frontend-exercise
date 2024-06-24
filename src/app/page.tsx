import { fetchProducts } from "./Data/fetchProducts";
import { fetchCategories } from "./Data/fetchCategories";
import { ProductLayout } from "./Components/ProductLayout";

export default async function Home() {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  if (categories && products)
    return <ProductLayout categories={categories} products={products} />;
}
