import Image from "next/image";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./Style/main.scss";

import {
  ShoppingCart,
  ShoppingCartButton,
  ShoppingCartProvider,
} from "./Components/ShoppingCart";
import { fetchCart } from "./Data/fetchCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy store",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: Props) {
  const cart = await fetchCart();

  return (
    <html>
      <body className={inter.className}>
        <ShoppingCartProvider>
          <div className="p-4 px-2 bg-white border-b flex justify-center">
            <div className="w-full flex justify-between">
              {/* TODO: Add navigation link ID */}
              <a
                className="flex items-center absolute focus:flex opacity-0 focus:opacity-100 p-4 border-2 border-blue-800 rounded bg-white"
                href="#product-navigation"
              >
                Skip to navigation
              </a>
              <a className="flex items-center" href="/">
                <Image
                  src="/logo.svg"
                  width="174"
                  height="26"
                  alt="Dummy store logo"
                />
              </a>
              <ShoppingCartButton />
            </div>
          </div>
          {children}
          {cart && <ShoppingCart cart={cart} />}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
