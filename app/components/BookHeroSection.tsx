"use client";
import { CONSTANTS } from "@/app/constants";
import BookHero from "@/app/components/BookHero";

export default function BookHeroSection() {
  return (
    <>
      <BookHero
        productKey="komplet"
        title="Komplet"
        description={
          <>
            <b>Komplet</b> er en grundbog til kursister på Danskuddannelse 2
            modul 6, der er på vej mod Prøve i Dansk 2.
          </>
        }
        price={CONSTANTS.PRODUCTS.komplet.priceExclMoms}
        image={CONSTANTS.PRODUCTS.komplet.image}
        imageAlt="Komplet lærebog"
        deliveryText="Udkommer 10. september – forudbestil nu"
        preorder
        showNyhed
        className="pb-10 mb-10 border-b border-gray-200"
      />
      <BookHero
        productKey="facet"
        title="Facet"
        description={
          <>
            <b>Facet</b> er en grundbog til kursister på Danskuddannelse 3 modul
            5, der er på vej mod Prøve i Dansk 3.
          </>
        }
        price={CONSTANTS.PRODUCTS.facet.priceExclMoms}
        image={CONSTANTS.PRODUCTS.facet.image}
        imageAlt="Facet lærebog"
        deliveryText="Forventet leveringstid: 3-4 arbejdsdage"
        previewHref={CONSTANTS.LINKS.PREVIEW.da}
        className="pb-4"
      />
    </>
  );
}
