import { useCartContext } from "@/contexts/CartContext";
import { Check, Minus, Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";

export default function PurchaseBook() {
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  const [isItemsAdded, setIsItemsAdded] = useState(false);

  const { setAmount } = useCartContext();

  function handleAddToCart() {
    setAmount(purchaseAmount);
    setIsItemsAdded(true);
  }

  function handleChangeAmount(button: "p" | "m") {
    setIsItemsAdded(false);
    if (button === "p") {
      setPurchaseAmount((prev) => prev + 1);
    } else {
      if (purchaseAmount === 1) return;
      setPurchaseAmount((prev) => prev - 1);
    }
  }

  return (
    <div className=" rounded-xl p-4 flex flex-col gap-y-2 w-full">
      <p className="gap-x-1 flex flex-row items-baseline">
        <span className="text-4xl font-semibold">200</span>
        <span className="text-2xl font-semibold">DKK</span>
        <span>excl. moms</span>
      </p>
      <div className="flex gap-2 flex-col lg:flex-row w-full gap-x-8">
        <div className="bg-white justify-between w-24 px-2 flex flex-row items-center rounded-xl border-2 border-black">
          <button onClick={() => handleChangeAmount("m")} className="text-3xl">
            <Minus />
          </button>
          <span className="text-2xl font-bold">{purchaseAmount}</span>
          <button onClick={() => handleChangeAmount("p")} className="text-3xl">
            <Plus />
          </button>
        </div>
        {isItemsAdded ? (
          <button className="rounded-lg justify-center items-center px-2 text-lg flex flex-row gap-x-2 bg-brandOrange text-white font-medium">
            <Check /> Kurv opdateret!
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="rounded-lg justify-center items-center px-3 text-lg flex flex-row gap-x-2 bg-blue text-white font-medium"
          >
            <ShoppingBasket /> Føj til kurv
          </button>
        )}
      </div>
    </div>
  );
}
