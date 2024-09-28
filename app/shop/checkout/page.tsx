"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Checkout() {
  const params = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log("USE");

    const paymentId = params.get("paymentId");
    console.log(window.Dibs);
    console.log(process.env.NEXT_PUBLIC_NETS_CHECKOUT_KEY);

    if (
      typeof window !== "undefined" &&
      window.Dibs &&
      paymentId &&
      !isInitialized
    ) {
      // Function to initialize checkout after the container is rendered
      const initCheckout = () => {
        // Check if the container is available in the DOM
        const container = document.getElementById("checkout-container-div");
        if (container) {
          setIsInitialized(true);
          console.log("Ok we in");

          // Define your checkout options
          const checkoutOptions = {
            checkoutKey: process.env.NEXT_PUBLIC_NETS_CHECKOUT_KEY, // Replace!
            paymentId: paymentId,
            containerId: "checkout-container-div", // Include the containerId here
          };

          console.log(checkoutOptions);

          // Initialize the Dibs checkout object
          const checkout = new window.Dibs.Checkout(checkoutOptions);
          console.log(checkout);

          checkout.on("payment-completed", function (response: never) {
            console.log("Payment completed");
            console.log(response);
            redirect("/success");
          });
        } else {
          console.log("Checkout container not found. Retrying...");
          setTimeout(initCheckout, 100); // Retry after a short delay
        }
      };

      initCheckout(); // Call the init function
    } else {
      console.log("Expected a paymentId"); // No paymentId provided
      // window.location = "cart.html"; // go back to cart.html
    }
  }, [params]);

  return (
    <section>
      <div id="checkout-container-div"></div>
      <div>
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </section>
  );
}
