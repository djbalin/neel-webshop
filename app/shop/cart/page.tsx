"use client";

export default function Checkout() {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/create-payment-nets"); // Assuming you have an API route set up in Next.js
      const data = await response.json();

      if (!data.paymentId) {
        console.error("Error: Check output from create-payment");
        return;
      }
      console.log(data);

      //   redirect(`/shop/checkout/?paymentId=${data.paymentId}`);

      //   // Redirect to checkout page with paymentId
      window.location.href = `/shop/checkout/?paymentId=${data.paymentId}`;
    } catch (error) {
      console.error("Connection error:", error);
    }
  };
  return (
    <>
      <section>
        <button className="border-black border-2" onClick={handleCheckout}>
          NETS TEST
        </button>
      </section>
    </>
  );
}
