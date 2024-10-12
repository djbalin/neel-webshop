"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  amount: number;
  setAmount: (amount: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [amount, setAmount] = useState(0);

  return (
    <CartContext.Provider value={{ amount, setAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
