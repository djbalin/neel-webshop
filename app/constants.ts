export const CONSTANTS = {
  BOOK_PRICE_DKK_EXCL_MOMS: 289,
  DELIVERY_PRICE_DKK: 55,
  PRODUCTS: {
    facet: {
      key: "facet",
      title: "Facet, Grundbog",
      shortTitle: "Facet",
      priceExclMoms: 289,
      image: "/images/forside.avif",
      preorder: false,
    },
    komplet: {
      key: "komplet",
      title: "Komplet, Grundbog",
      shortTitle: "Komplet",
      priceExclMoms: 299,
      image: "/images/komplet-forside.avif",
      preorder: true,
    },
  },
  LINKS: {
    HOME: { da: "/", en: "/en" },
    ABOUT: { da: "/om-os", en: "/en/about" },
    BOOKS: { da: "/boeger", en: "/en/books" },
    CONTACT: { da: "/kontakt", en: "/en/contact" },
    PREVIEW: { da: "/preview", en: "/en/preview" },
    PREVIEW_KOMPLET: { da: "/preview?bog=komplet", en: "/en/preview" },
    LAERERVEJLEDNING: { da: "/laerervejledning", en: "/en/guide" },
    AUDIO: { da: "/audio", en: "/en/audio" },
    CART: { da: "/kurv", en: "/en/cart" },
  },
  DAFOLO_URL:
    "https://dafololager.dk/dafololagerhotel/WebForms/_!Dafolo_45152383.asp",
} as const;
export const DEV_DOMAIN = "http://localhost:3000";
export const PROD_DOMAIN = "https://www.forlagetdit.dk";
