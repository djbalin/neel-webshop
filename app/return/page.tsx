"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const CheckoutReturn = () => {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md  w-full">
        <Suspense>
          <ReturnRenderer />
        </Suspense>
      </div>
    </div>
  );
};

function ReturnRenderer() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  if (success) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold  mb-4">Ordre bekræftet!</h2>
        <p className="text-gray-600 mb-6">
          Mange tak for din bestilling. Du modtager en ordrebekræftelse via
          e-mail.
        </p>
        <a
          href="/"
          className="inline-block bg-brandGreen text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Hjem
        </a>
      </div>
    );
  }
  if (canceled) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Bestilling ikke gennemført</h2>
        <p className="text-gray-600 mb-6">
          Betalingen blev afbrudt, prøv venligst igen.
        </p>
        <a
          href="/"
          className="inline-block bg-brandGreen text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Hjem
        </a>
      </div>
    );
  }
}

export default CheckoutReturn;
