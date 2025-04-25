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

export default function BookHeroSection() {
  const {
    purchaseAmount,
    isItemsAdded,
    handleAddToCart,
    handleChangeAmount,
    handleTypeAmount,
  } = usePurchaseControls();

  return (
    <section className="flex flex-col md:flex-row pb-14">
      <div className="md:w-3/5">
        <h1 className="header mb-1">Facet</h1>
        <span className="text-sm text-gray-500">
          Af{" "}
          <a
            href={CONSTANTS.LINKS.ABOUT}
            className="underline font-medium text-gray-700"
          >
            Fanny Slotorub
          </a>{" "}
          &{" "}
          <a
            href={CONSTANTS.LINKS.ABOUT}
            className="underline font-medium text-gray-700"
          >
            Neel Jersild Moreira
          </a>
        </span>
        <p className="font-normal my-4 w-4/5">
          <b>Facet</b> er en grundbog til kursister på Danskuddannelse 3 modul
          5, der er på vej mod Prøve i Dansk 3.
        </p>

        {/* Purchase Controls */}
        <div className="rounded-xl flex flex-col md:flex-row w-full gap-6">
          <div className="flex flex-col gap-y-2 w-full">
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
        </div>

        <div className="flex flex-col gap-y-2 mt-2">
          <span className="text-gray-700 text-xs sm:text-sm">
            Forventet leveringstid: 3-4 arbejdsdage
          </span>
          <a
            href={CONSTANTS.LINKS.PREVIEW}
            className="text-blue-600 underline text-sm"
          >
            Læseprøve →
          </a>
        </div>
      </div>

      {/* Book Image Column */}
      <div className="hidden md:flex md:w-2/5 justify-center items-start">
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
    </section>
  );
}

{
  /* <div className="flex w-full py-16 flex-row space-x-6  ">
  <div className="flex w-3/5   bg-blue-50  flex-col">
    <h1 className="text-6xl   md:text-4xl lg:text-6xl font-normal tracking-tight mb-1">
      Facet
    </h1>
    <span>
      Af{" "}
      <a href={CONSTANTS.LINKS.ABOUT} className="anchorTag">
        Fanny Slotorub
      </a>{" "}
      &{" "}
      <a href={CONSTANTS.LINKS.ABOUT} className="anchorTag">
        Neel Jersild Moreira
      </a>
    </span>
    <p className="font-normal mt-6 mb-8 ">
      <b>Facet</b> består af 4 kapitler med temaerne: Arbejde og identitet,
      Penge og økonomi, Sundhed og livsstil og Kriminalitet og straf... (læs
      mere)
    </p>
    <PurchaseBook />
    <span className="mt-3">Forventet leveringstid: 3 uger</span>
  </div>
  <div className="w-2/5">
    <Image
      width={250}
      height={250}
      src={"/images/forside.avif"}
      alt={"Puls 4 book cover"}
      className="object-contain"
    />
  </div>
</div>; */
}
