"use client";
import { useSearchParams } from "next/navigation";

const CheckoutReturn = () => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md  w-full">
        {success === "true" && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Bestilling lykkedes!
            </h2>
            <p className="text-gray-600 mb-6">
              Mange tak for din bestilling. Du modtager en ordrebekræftelse via
              e-mail.
            </p>
            <a
              href="/"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Startside
            </a>
          </div>
        )}
        {canceled === "true" && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Ordre annulleret
            </h2>
            <p className="text-gray-600 mb-6">
              Din ordre blev ikke fuldført, da du afbrød betalingen, eller noget
              andet gik galt. Prøv venligst igen.
            </p>
            <a
              href="/"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Startside
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutReturn;
