"use client";
import { useCartContext } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "@/app/constants";

const CartButton = ({ isEn }: { isEn: boolean }) => {
  const { amount } = useCartContext();

  return (
    <div className="relative">
      <Link
        href={isEn ? CONSTANTS.LINKS.CART.en : CONSTANTS.LINKS.CART.da}
        className="relative cursor-pointer space-x-1 flex items-center"
      >
        <span>{isEn ? "Cart" : "Kurv"}</span>
        <div className="relative">
          <Image
            src={"/images/basket.svg"}
            alt="book"
            width={20}
            height={20}
            className="inline-block mr-2"
          />
          {amount > 0 && (
            <span className="absolute -bottom-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
              {amount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartButton;
