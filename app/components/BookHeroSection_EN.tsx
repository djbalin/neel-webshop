"use client";
import { CONSTANTS } from "@/app/constants";
import { BookHero } from "@/app/components/BookHero";

export default function BookHeroSection_EN() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 pb-10">
      <BookHero
        isEn
        productKey="komplet"
        title="Komplet"
        description={
          <>
            <em>Komplet</em> is a textbook for learners in Danish Education 2,
            Module 6, who are preparing for the Danish Exam 2.
          </>
        }
        price={CONSTANTS.PRODUCTS.komplet.priceExclMoms}
        image={CONSTANTS.PRODUCTS.komplet.image}
        imageAlt="Komplet textbook"
        deliveryText="Publishes 10 September – pre-order now"
        previewHref={CONSTANTS.LINKS.PREVIEW_KOMPLET.en}
        preorder
        showNyhed
      />
      <BookHero
        isEn
        productKey="facet"
        title="Facet"
        description={
          <>
            <em>Facet</em> is a textbook for learners in Danish Education 3,
            Module 5, who are preparing for the Danish Exam 3.
          </>
        }
        price={CONSTANTS.PRODUCTS.facet.priceExclMoms}
        image={CONSTANTS.PRODUCTS.facet.image}
        imageAlt="Facet textbook"
        deliveryText="Expected delivery time: 3-4 business days"
        previewHref={CONSTANTS.LINKS.PREVIEW.en}
      />
    </div>
  );
}
