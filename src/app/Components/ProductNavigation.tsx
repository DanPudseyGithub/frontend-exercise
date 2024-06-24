"use client";

import { ReactNode } from "react";
import { Menu } from "lucide-react";
import { createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const ProductNavigation = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="md:hidden mb-4">
      <button
        className="flex w-full gap-4 py-2 justify-between px-4 border rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="product-navigation-menu"
        aria-expanded={isOpen}
        aria-label="Toggle product navigation menu"
      >
        Search by category <Menu />
      </button>
      {isOpen && (
        <div id="product-navigation-menu" className="mt-4">
          {children}
        </div>
      )}
    </section>
  );
};
