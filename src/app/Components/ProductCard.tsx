import Image from "next/image";
import type { Product as ProductType } from "../Types/Product";

type Product = {
  product: ProductType;
};

export const ProductCard = ({ product }: Product) => {
  const { id, images, title, price, description } = product;

  return (
    <article key={id} className="bg-white p-4 border mb-2 rounded">
      <div className="flex flex-col">
        <div className="flex gap-4 md:flex-col">
          <div className="min-w-34 md:min-w-full">
            <Image
              className="m-auto"
              src={images[0]}
              width="200"
              height="200"
              alt={title}
            />
          </div>
          <header>
            <h3 className="mb-1 font-bold text-xl">{title}</h3>
            <p className="text-base mb-2">${price}</p>
          </header>
        </div>
        <p className="text-gray-400 font-light mb-4">{description}</p>
        <div className="flex gap-2">
          {/* TODO: Make + and - buttons interactive */}
          <button className="flex items-center justify-center p-4 rounded border">
            -
          </button>
          {/* TODO: Make div and input */}
          <div className="flex items-center justify-center p-4 rounded border">
            1
          </div>
          <button className="flex items-center justify-center p-4 rounded border">
            +
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded grow">
            Add to basket
          </button>
        </div>
      </div>
    </article>
  );
};
