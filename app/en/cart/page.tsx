"use client";

import { useCartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CONSTANTS } from "../../constants";
import { useRouter } from "next/navigation";

const DAFOLO_URL =
  "https://dafololager.dk/dafololagerhotel/WebForms/_!Dafolo_45152383.asp";

export default function CartPage() {
  const { amount, setAmount } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const [customerType, setCustomerType] = useState<null | "privat" | "erhverv">(
    null
  );
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (customerType === "erhverv") {
      const interval = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(interval);
            window.location.href = DAFOLO_URL;
            return 0;
          }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [customerType]);

  function format(num: number) {
    return num.toFixed(2);
  }

  const unitPrice = CONSTANTS.BOOK_PRICE_DKK_EXCL_MOMS;
  const deliveryPrice = 55;
  const grossPrice = unitPrice * amount;
  const momsPrice = grossPrice * 0.25;
  const totalPrice = grossPrice + momsPrice + deliveryPrice;

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 0 ? amount - 1 : 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (amount > 5) {
      router.push(DAFOLO_URL);
    } else {
      e.currentTarget.submit();
    }
  };

  return (
    <div className="space-y-4 pb-10">
      <h1 className="header">Your cart</h1>

      <div className="bg-white sm:px-4 rounded-lg max-w-xl border-2 border-gray-100 shadow-xl p-6 mb-10">
        <div className="flex items-center space-x-4 mb-10">
          <Image
            src={"/images/forside.avif"}
            alt="Item"
            width={100}
            height={100}
          />
          <span className="font-semibold text-lg sm:text-3xl">
            Facet, Textbook
          </span>
        </div>

        {!customerType ? (
          <div className="space-y-6 py-4">
            <h2 className="text-xl font-semibold text-center">
              Which type of customer are you?
            </h2>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setCustomerType("privat")}
                className="w-full py-3 bg-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Private/individual
              </button>
              <button
                onClick={() => setCustomerType("erhverv")}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Business/institution
              </button>
            </div>
          </div>
        ) : customerType === "erhverv" ? (
          <div className="text-center py-6 space-y-2">
            <p className="text-xl font-semibold">
              You are being redirected to our distributor Dafolo
            </p>
            <p className="text-gray-500">({countdown})</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Quantity</span>
              <span className="text-xl font-semibold">Price</span>
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
              <span>VAT (25%):</span>
              <span>{format(momsPrice)} DKK</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery:</span>
              <span>{format(deliveryPrice)} DKK</span>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="flex justify-between font-bold mb-6 sm:text-lg">
              <span>Total including VAT and delivery:</span>
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
                {isLoading
                  ? "You are being redirected to checkout..."
                  : "Proceed to checkout"}
              </button>
              <input type="hidden" name="quantity" value={amount} />
              <input type="hidden" name="locale" value="da" />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
