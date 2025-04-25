"use client";

import { useCartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { useState } from "react";
import { CONSTANTS } from "../constants";
import { useRouter } from "next/navigation";
export default function CartPage() {
  const { amount, setAmount } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);

  function format(num: number) {
    return num.toFixed(2).replace(".", ",");
  }

  const router = useRouter();

  const unitPrice = CONSTANTS.BOOK_PRICE_DKK_EXCL_MOMS; // Fixed unit price
  const deliveryPrice = 25;
  const grossPrice = unitPrice * amount;
  const momsPrice = grossPrice * 0.25;
  const totalPrice = grossPrice + momsPrice + deliveryPrice;

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 0 ? amount - 1 : 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (amount > 5) {
      // Redirect to Dafolo website for orders > 5
      router.push("https://www.dafolo.dk");
    } else {
      // Submit the form for Stripe checkout for orders <= 5
      e.currentTarget.submit();
    }
  };

  // if (amount === 0) {
  //   return (
  //     <div className="container mx-auto max-w-4xl px-4 py-10">
  //       <h1 className="text-3xl font-bold mb-8">Din kurv</h1>
  //       <p className="text-lg mb-6">Din kurv er tom.</p>
  //     </div>
  //   );
  // }

  return (
    <div className=" px-4 space-y-4 pb-10">
      <h1 className="header">Din kurv</h1>

      <div className="bg-white rounded-lg max-w-xl shadow-xl p-6 mb-10">
        <div className="flex items-center space-x-4 mb-10">
          <Image
            src={"/images/forside.avif"}
            alt="Item"
            width={100}
            height={100}
          />
          <span className="font-semibold text-3xl">Facet 5, Grundbog</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Antal</span>
          <span className="text-xl font-semibold">Pris</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button
              onClick={decreaseAmount}
              className="w-9 h-9 bg-gray-300  rounded-full text-xl font-bold"
            >
              -
            </button>
            <span className="mx-4 text-xl">{amount}</span>
            <button
              onClick={increaseAmount}
              className="w-9 h-9 bg-gray-300 rounded-full text-xl font-bold"
            >
              +
            </button>
          </div>
          <span className="text-lg">{format(grossPrice)} DKK</span>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex justify-between mb-2">
          <span>Moms (25%):</span>
          <span>{format(momsPrice)} DKK</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Levering:</span>
          <span>{format(deliveryPrice)} DKK</span>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex justify-between font-bold mb-6 text-lg">
          <span>Total inkl. moms og levering:</span>
          <span>{format(totalPrice)} DKK</span>
        </div>
        <form
          action="/api/stripe/checkout-sessions"
          method="POST"
          onSubmit={handleSubmit}
        >
          <button
            disabled={amount === 0 || isLoading}
            type="submit"
            role="link"
            className={`w-full font-bold items-center text-center py-2  text-white rounded hover:bg-orange-600 transition ${
              amount === 0 ? "bg-greenBlue" : "bg-blue-800"
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Du videresendes til betaling..." : "Gå til betaling"}
          </button>
          <input type="hidden" name="quantity" value={amount} />
          <input type="hidden" name="locale" value="da" />
        </form>
      </div>
    </div>
  );
}
