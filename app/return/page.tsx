import { Suspense } from "react";
import { CONSTANTS } from "../constants";

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
                Ordre bekræftet!
              </h2>
              <p className="text-gray-600 mb-6">
                Mange tak for din bestilling. Du modtager en ordrebekræftelse
                via e-mail.
              </p>
              <a
                href={CONSTANTS.LINKS.HOME}
                className="inline-block bg-brandGreen text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Hjem
              </a>
            </div>
          )}
          {canceled && (
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Bestilling ikke gennemført
              </h2>
              <p className="text-gray-600 mb-6">Betalingen blev afbrudt.</p>
              <a
                href={CONSTANTS.LINKS.HOME}
                className="inline-block bg-brandGreen text-white px-6 py-2 rounded hover:bg-green-600 transition"
              >
                Hjem
              </a>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
