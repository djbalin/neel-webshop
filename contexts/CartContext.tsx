"use client";
import { createContext, useContext, useMemo, useState } from "react";

export type ProductKey = "facet" | "komplet";

type Quantities = Record<ProductKey, number>;

type CartContextType = {
  quantities: Quantities;
  setQuantity: (product: ProductKey, quantity: number) => void;
  addQuantity: (product: ProductKey, quantity: number) => void;
  clear: () => void;
  totalItems: number;
  /** @deprecated kept for the English pages – maps to the Facet quantity */
  amount: number;
  /** @deprecated kept for the English pages – sets the Facet quantity */
  setAmount: (amount: number) => void;
};

const EMPTY: Quantities = { facet: 0, komplet: 0 };

const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quantities, setQuantities] = useState<Quantities>(EMPTY);

  const setQuantity = (product: ProductKey, quantity: number) =>
    setQuantities((prev) => ({
      ...prev,
      [product]: Math.max(0, Number.isNaN(quantity) ? 0 : quantity),
    }));

  const addQuantity = (product: ProductKey, quantity: number) =>
    setQuantities((prev) => ({
      ...prev,
      [product]: Math.max(0, prev[product] + quantity),
    }));

  const clear = () => setQuantities(EMPTY);

  const totalItems = quantities.facet + quantities.komplet;

  const value = useMemo<CartContextType>(
    () => ({
      quantities,
      setQuantity,
      addQuantity,
      clear,
      totalItems,
      amount: quantities.facet,
      setAmount: (amount: number) => setQuantity("facet", amount),
    }),
    [quantities, totalItems],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
