"use client";
import { useCartContext } from "@/contexts/CartContext";
import { XCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type CheckoutData = {
  quantity: number;
  locale: "da" | "en";
};

const CartButton = () => {
  const { amount, setAmount } = useCartContext();
  const [isCartVisible, setIsCartVisible] = useState(false); // State to control cart visibility

  function format(num: number) {
    return num.toFixed(2).replace(".", ",");
  }

  const unitPrice = 250; // Fixed unit price
  const deliveryPrice = 25;
  const grossPrice = unitPrice * amount;
  const momsPrice = grossPrice * 0.25;
  const totalPrice = grossPrice + momsPrice + deliveryPrice;

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 0 ? amount - 1 : 0);

  return (
    <div className={`relative`}>
      {/* Basket Icon */}
      <div
        className="relative cursor-pointer space-x-1"
        onClick={() => setIsCartVisible((prev) => !prev)} // Toggle cart visibility on click
      >
        <span className="">Kurv</span>
        <span>
          <Image
            src={"/images/basket.svg"}
            alt="book"
            width={30}
            height={30}
            className="inline-block mr-2"
          />
          {/* <span className="absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2">
            <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  rounded-full px-2 py-[0.15rem] font-medium ">
              {amount}
            </span>
          </span> */}
        </span>
      </div>

      {/* Cart Contents Dropdown */}
      {isCartVisible && (
        <div className="absolute z-50 right-0 mt-2 min-w-[600px] text-black bg-white shadow-lg border border-gray-300 rounded-lg py-6 px-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Din kurv</h3>
            <XCircleIcon
              size={30}
              className="cursor-pointer"
              onClick={() => setIsCartVisible(false)}
            />
          </div>
          <div className="flex items-center space-x-4 mb-10">
            <Image
              src={"/images/neel_book.png"}
              alt="Item"
              width={75}
              height={75}
            />
            <span className="font-semibold text-3xl">Facet 5, Grundbog</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Antal</span>
            <span className="text-lg font-semibold">Pris</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <button
                onClick={decreaseAmount}
                className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full"
              >
                -
              </button>
              <span className="mx-2">{amount}</span>
              <button
                onClick={increaseAmount}
                className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full"
              >
                +
              </button>
            </div>
            <span>{format(grossPrice)} DKK</span>
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="flex justify-between mb-2">
            <span>Levering:</span>
            <span>{format(deliveryPrice)} DKK</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Moms (25%):</span>
            <span>{format(momsPrice)} DKK</span>
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="flex  justify-between font-bold mb-4">
            <span>Total inkl. moms og levering:</span>
            <span>{format(totalPrice)} DKK</span>
          </div>
          <form action="/api/stripe/checkout-sessions" method="POST">
            <button
              disabled={amount === 0}
              type="submit"
              role="link"
              className="w-full font-bold items-center text-center py-2 bg-greenBlue text-white rounded hover:bg-orange-600 transition"
            >
              Gå til betaling
            </button>
            <input type="hidden" name="quantity" value={amount} />
            <input type="hidden" name="locale" value="da" />
          </form>
        </div>
      )}
    </div>
  );
};

export default CartButton;
