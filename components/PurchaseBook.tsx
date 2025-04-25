"use client";
import { useCartContext } from "@/contexts/CartContext";
import { Check, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CONSTANTS } from "@/app/constants";

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

  const handleTypeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    if (isNaN(num)) {
      setPurchaseAmount(0);
      return;
    }
    setPurchaseAmount(num);
  };

  return (
    <div className="rounded-xl flex flex-col md:flex-row w-full gap-6">
      {/* Left column - Purchase Info */}
      <div className="flex flex-col gap-y-2 md:w-3/5">
        <p className="gap-x-2 flex mb-4 flex-row items-baseline">
          <span className="text-4xl font-semibold">
            {CONSTANTS.BOOK_PRICE_DKK_EXCL_MOMS}
          </span>
          <span className="text-2xl font-normal">DKK</span>
          <span className="font-light">excl. moms</span>
        </p>
        <div className="flex gap-2 flex-col lg:flex-row w-full gap-x-6">
          <div className="bg-white justify-between w-32 px-2 flex flex-row items-center rounded-md border-2 border-black">
            <button
              onClick={() => handleChangeAmount("m")}
              className="text-3xl"
            >
              <Minus />
            </button>
            <input
              type="text"
              className="text-3xl w-14 text-center"
              onChange={handleTypeAmount}
              value={purchaseAmount}
            />
            <button
              onClick={() => handleChangeAmount("p")}
              className="text-3xl"
            >
              <Plus />
            </button>
          </div>
          {isItemsAdded ? (
            <button className="rounded-lg justify-center items-center px-2 text-lg flex flex-row gap-x-2 bg-orange text-white font-medium">
              <Check /> Kurv opdateret!
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="justify-center items-center py-2 stroke-white px-6 flex flex-row gap-x-2 bg-orange text-white"
            >
              <Image
                src={"/images/basket_white.svg"}
                alt="book"
                width={25}
                height={25}
                className="inline-block"
              />
              Føj til kurv
            </button>
          )}
        </div>
      </div>

      {/* Right column - Book Image */}
      <div className="hidden sm:flex md:w-2/5 justify-center items-start">
        <div className="relative aspect-[3/4] w-2/3">
          <Image
            src="/images/forside.avif"
            alt="Facet lærebog"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export function usePurchaseControls() {
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

  const handleTypeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    if (isNaN(num)) {
      setPurchaseAmount(0);
      return;
    }
    setPurchaseAmount(num);
  };

  return {
    purchaseAmount,
    isItemsAdded,
    handleAddToCart,
    handleChangeAmount,
    handleTypeAmount,
  };
}
