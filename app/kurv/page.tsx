"use client";

import { useCartContext, type ProductKey } from "@/contexts/CartContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import { CONSTANTS } from "../constants";
import { useRouter } from "next/navigation";

const PRODUCT_ORDER: ProductKey[] = ["komplet", "facet"];
const MAX_WEBSHOP_QUANTITY = 5;

function format(num: number) {
  return num.toFixed(2).replace(".", ",");
}

export default function CartPage() {
  const { quantities, setQuantity, totalItems } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const [customerType, setCustomerType] = useState<null | "privat" | "erhverv">(
    null,
  );
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (customerType === "erhverv") {
      const interval = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(interval);
            window.location.href = CONSTANTS.DAFOLO_URL;
            return 0;
          }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [customerType]);

  const lines = PRODUCT_ORDER.map((key) => ({
    key,
    product: CONSTANTS.PRODUCTS[key],
    quantity: quantities[key],
  }));

  const deliveryPrice = CONSTANTS.DELIVERY_PRICE_DKK;
  const grossPrice = lines.reduce(
    (sum, line) => sum + line.product.priceExclMoms * line.quantity,
    0,
  );
  const momsPrice = grossPrice * 0.25;
  const isEmpty = totalItems === 0;
  const totalPrice = isEmpty ? 0 : grossPrice + momsPrice + deliveryPrice;
  const hasPreorder = lines.some(
    (line) => line.product.preorder && line.quantity > 0,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmpty) return;
    setIsLoading(true);

    if (totalItems > MAX_WEBSHOP_QUANTITY) {
      router.push(CONSTANTS.DAFOLO_URL);
    } else {
      e.currentTarget.submit();
    }
  };

  return (
    <div className="space-y-6 pb-16">
      <h1 className="header">Din kurv</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden max-w-xl">
        {/* Line items – both books are always listed */}
        <ul className="divide-y divide-gray-100">
          {lines.map((line) => {
            const inCart = line.quantity > 0;
            return (
              <li
                key={line.key}
                className={`flex gap-4 p-5 sm:p-6 ${inCart ? "" : "opacity-60"}`}
              >
                <div className="relative h-24 w-20 shrink-0">
                  <Image
                    src={line.product.image}
                    alt={line.product.shortTitle}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-lg sm:text-xl">
                        {line.product.title}
                      </span>
                      <span className="text-xs text-gray-400 whitespace-nowrap mt-1">
                        {inCart ? `${line.quantity} i kurven` : "Ikke i kurven"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {format(line.product.priceExclMoms)} DKK ekskl. moms
                    </p>
                    {line.product.preorder && (
                      <span className="inline-block mt-2 text-xs font-medium bg-green text-white rounded-full py-0.5 px-2.5">
                        Forudbestilling · udkommer 10. september
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-gray-200">
                      <button
                        onClick={() =>
                          setQuantity(line.key, Math.max(0, line.quantity - 1))
                        }
                        disabled={line.quantity === 0}
                        aria-label="Færre"
                        className="h-9 w-9 flex items-center justify-center text-gray-600 hover:text-black disabled:opacity-30"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {line.quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(line.key, line.quantity + 1)}
                        aria-label="Flere"
                        className="h-9 w-9 flex items-center justify-center text-gray-600 hover:text-black"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="font-semibold">
                      {format(line.product.priceExclMoms * line.quantity)} DKK
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-gray-100 p-5 sm:p-6 bg-gray-50/60">
          {isEmpty ? (
            <p className="text-center text-gray-500 py-2">
              Din kurv er tom. Brug{" "}
              <Plus size={14} className="inline align-[-2px]" /> ovenfor for at
              tilføje bøger.
            </p>
          ) : !customerType ? (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold text-center">
                Hvilken type kunde er du?
              </h2>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setCustomerType("privat")}
                  className="w-full py-3 bg-orange text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Privat
                </button>
                <button
                  onClick={() => setCustomerType("erhverv")}
                  className="w-full py-3 bg-ditBlue text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Erhverv / institution
                </button>
              </div>
            </div>
          ) : customerType === "erhverv" ? (
            <div className="text-center py-6 space-y-2">
              <p className="text-lg font-semibold">
                Du videresendes til vores distributør Dafolo
              </p>
              <p className="text-gray-500">({countdown})</p>
              <a
                href={CONSTANTS.DAFOLO_URL}
                className="text-blue-600 underline text-sm"
              >
                Klik her, hvis du ikke bliver sendt videre
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal (ekskl. moms)</span>
                <span>{format(grossPrice)} DKK</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Moms (25%)</span>
                <span>{format(momsPrice)} DKK</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Levering</span>
                <span>{format(deliveryPrice)} DKK</span>
              </div>

              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                <span>Total inkl. moms</span>
                <span>{format(totalPrice)} DKK</span>
              </div>

              <p className="text-xs text-gray-500">
                Pakken leveres til din nærmeste pakkeshop.
              </p>
              {hasPreorder && (
                <p className="text-xs text-gray-500">
                  Forudbestilte bøger sendes, så snart de udkommer. Bestiller du
                  også bøger på lager, sendes hele ordren samlet.
                </p>
              )}

              <button
                type="button"
                onClick={() => setCustomerType(null)}
                className="text-xs text-gray-500 underline"
              >
                ← Skift kundetype
              </button>

              <form
                action="/api/stripe/checkout-sessions"
                method="POST"
                onSubmit={handleSubmit}
                className="pt-1"
              >
                <button
                  disabled={isLoading}
                  type="submit"
                  role="link"
                  className={`w-full font-bold text-center py-3 text-white rounded-lg bg-ditBlue hover:opacity-90 transition-opacity ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading
                    ? "Du videresendes til betaling..."
                    : "Gå til betaling"}
                </button>
                <input
                  type="hidden"
                  name="facetQuantity"
                  value={quantities.facet}
                />
                <input
                  type="hidden"
                  name="kompletQuantity"
                  value={quantities.komplet}
                />
                <input type="hidden" name="locale" value="da" />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
