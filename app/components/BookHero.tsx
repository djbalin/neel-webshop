"use client";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { CONSTANTS } from "@/app/constants";
import { useCartContext, type ProductKey } from "@/contexts/CartContext";
import NyhedBurst from "@/app/components/NyhedBurst";

type BookHeroProps = {
  productKey: ProductKey;
  title: string;
  description: React.ReactNode;
  price: number;
  image: string;
  imageAlt: string;
  deliveryText: string;
  previewHref?: string;
  preorder?: boolean;
  showNyhed?: boolean;
};

export function BookHero({
  productKey,
  title,
  description,
  price,
  image,
  imageAlt,
  deliveryText,
  previewHref,
  preorder = false,
  showNyhed = false,
}: BookHeroProps) {
  const { setQuantity } = useCartContext();
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  const [isItemsAdded, setIsItemsAdded] = useState(false);

  const addLabel = preorder ? "Forudbestil" : "Føj til kurv";
  const addedLabel = preorder ? "Forudbestilt!" : "Kurv opdateret!";

  function handleAddToCart() {
    setQuantity(productKey, purchaseAmount);
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

  function handleTypeAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setIsItemsAdded(false);
    const num = parseInt(e.target.value);
    setPurchaseAmount(isNaN(num) ? 0 : num);
  }

  return (
    <section className="flex flex-col">
      <h1 className="header mb-1">{title}</h1>
      <span className="text-sm text-gray-500">
        Af{" "}
        <a
          href={CONSTANTS.LINKS.ABOUT.da}
          className="underline font-medium text-gray-700"
        >
          Fanny Slotorub
        </a>{" "}
        &{" "}
        <a
          href={CONSTANTS.LINKS.ABOUT.da}
          className="underline font-medium text-gray-700"
        >
          Neel Jersild Moreira
        </a>
      </span>

      <div className="flex justify-center my-6">
        <div className="relative aspect-[3/4] w-2/3 max-w-[280px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
            priority
          />
          {showNyhed && <NyhedBurst className="absolute -top-8 -right-9" />}
        </div>
      </div>

      <p className="font-normal mb-4">{description}</p>

      {/* Purchase Controls */}
      <div className="flex flex-col gap-y-2 w-full mt-auto">
        <p className="gap-x-2 flex mb-2 flex-row items-baseline">
          <span className="text-4xl font-semibold">{price}</span>
          <span className="text-2xl font-normal">DKK</span>
          <span className="font-light">excl. moms</span>
        </p>
        <div className="flex gap-2 flex-col sm:flex-row w-full gap-x-4">
          <div className="bg-white justify-between w-32 px-2 flex flex-row items-center rounded-md border-2 border-black">
            <button
              onClick={() => handleChangeAmount("m")}
              className="text-3xl"
              aria-label="Færre"
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
              aria-label="Flere"
            >
              <Plus />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="justify-center max-w-sm items-center py-2 stroke-white px-6 flex flex-row gap-x-2 bg-orange text-white"
          >
            {isItemsAdded ? (
              <>
                <Check /> {addedLabel}
              </>
            ) : (
              <>
                <Image
                  src={"/images/basket_white.svg"}
                  alt="book"
                  width={25}
                  height={25}
                />
                {addLabel}
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 mt-2">
        <span className="text-gray-700 text-xs sm:text-sm">{deliveryText}</span>
        {previewHref && (
          <a
            href={previewHref}
            className={`text-blue-600 font-medium underline text-sm`}
          >
            Læseprøve →
          </a>
        )}
      </div>
    </section>
  );
}
