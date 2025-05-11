import { Suspense } from "react";
import { CONSTANTS } from "../../constants";

export default async function CheckoutReturn({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchP = await searchParams;
  const success = searchP.success;
  const canceled = searchP.canceled;

  return (
    <div className="flex items-center justify-center flex-grow w-full bg-gray-100 px-4 ">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-md w-full">
        <Suspense fallback={<div>Loading...</div>}>
          {success && (
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Order confirmed!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your order. You will receive an order confirmation
                via email.
              </p>
              <a
                href={CONSTANTS.LINKS.HOME.en}
                className="inline-block bg-brandGreen text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Home
              </a>
            </div>
          )}
          {canceled && (
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Order cancelled
              </h2>
              <p className="text-gray-600 mb-6">Payment was aborted.</p>
              <a
                href={CONSTANTS.LINKS.HOME.en}
                className="inline-block bg-brandGreen text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Home
              </a>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
