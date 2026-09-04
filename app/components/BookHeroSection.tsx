"use client";
import { CONSTANTS } from "@/app/constants";
import { BookHero } from "@/app/components/BookHero";

export function BookHeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 pb-10">
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
        previewHref={CONSTANTS.LINKS.PREVIEW_KOMPLET.da}
        previewLinkClassName="text-orange font-medium"
        preorder
        showNyhed
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
      />
    </div>
  );
}
