"use client";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import { CONSTANTS } from "@/app/constants";
import { useState } from "react";
import { useCartContext } from "@/contexts/CartContext";

function usePurchaseControls() {
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

export default function BookHeroSection_EN() {
  const {
    purchaseAmount,
    isItemsAdded,
    handleAddToCart,
    handleChangeAmount,
    handleTypeAmount,
  } = usePurchaseControls();

  return (
    <section className="flex flex-col md:flex-row pb-4">
      <div className="md:w-3/5">
        <h1 className="header mb-1">Facet</h1>
        <span className="text-sm text-gray-500">
          By{" "}
          <a
            href={CONSTANTS.LINKS.ABOUT.en}
            className="underline font-medium text-gray-700"
          >
            Fanny Slotorub
          </a>{" "}
          &{" "}
          <a
            href={CONSTANTS.LINKS.ABOUT.en}
            className="underline font-medium text-gray-700"
          >
            Neel Jersild Moreira
          </a>
        </span>
        <p className="font-normal my-4 w-4/5">
          <em>Facet</em> is a textbook for students in Danish Education 3,
          Module 5, who are preparing for the Danish Exam 3.
        </p>

        {/* Purchase Controls */}
        <div className="rounded-xl flex flex-col md:flex-row w-full gap-6">
          <div className="flex flex-col gap-y-2 w-full">
            <p className="gap-x-2 flex mb-4 flex-row items-baseline">
              <span className="text-4xl font-semibold">
                {CONSTANTS.BOOK_PRICE_DKK_EXCL_MOMS}
              </span>
              <span className="text-2xl font-normal">DKK</span>
              <span className="font-light">(excl. VAT)</span>
            </p>
            <div className="flex gap-2 flex-col md:flex-row w-full gap-x-6">
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
              {/* {isItemsAdded ? (
                <button className="rounded-lg justify-center items-center px-2 text-lg flex flex-row gap-x-2 bg-orange text-white font-medium">
                  <Check /> Kurv opdateret!
                </button>
              ) : ( */}
              <button
                onClick={handleAddToCart}
                className="justify-center max-w-sm items-center py-2 stroke-white px-6 flex flex-row gap-x-2 bg-orange text-white"
              >
                {isItemsAdded ? (
                  <>
                    <Check /> Cart updated!
                  </>
                ) : (
                  <>
                    <Image
                      src={"/images/basket_white.svg"}
                      alt="book"
                      width={25}
                      height={25}
                      // className="inline-block"
                    />
                    Add to cart
                  </>
                )}
              </button>
              {/* )} */}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 mt-2">
          <span className="text-gray-700 text-xs sm:text-sm">
            Expected delivery time: 3-4 business days
          </span>
          <a
            href={CONSTANTS.LINKS.PREVIEW.en}
            className="text-blue-600 underline text-sm"
          >
            Preview →
          </a>
        </div>
      </div>

      {/* Book Image Column */}
      <div className="hidden md:flex md:w-2/5 ">
        <div className="relative aspect-[3/4] w-2/3 ">
          <Image
            src="/images/forside.avif"
            alt="Facet lærebog"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
