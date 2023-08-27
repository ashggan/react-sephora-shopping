export interface Product {
  type: ProductType;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface ProductState {
  products: Product[];
  status: string;
  error: string | null | undefined;
}

export interface ProductApi {
  data: Product[];
}
export interface Attributes {
  name: string;
  heading: null | string;
  rating: number;
  "how-to-text": string;
  description: string;
  benefits: string;
  application: null;
  ingredients: string;
  seo: SEO;
  "available-on-modiface": boolean;
  "available-on-findation": boolean;
  "findation-id": number | null;
  "slug-url": string;
  "variants-count": number;
  labels: any[];
  "web-url": string;
  "featured-variant-id": number;
  "reviews-count": number;
  "new-arrival": boolean;
  "how-to": string;
  "option-type-categories": OptionTypeCategory[];
  "image-urls": string[];
  "icon-image-urls": string[];
  "cart-image-urls": string[];
  "featured-image-urls": string[];
  "default-image-urls": string[];
  "closeup-image-urls": string[];
  "zoom-image-urls": string[];
  price: number;
  "original-price": number;
  "under-sale": boolean;
  "sale-text": null | string;
  "sold-out": boolean;
}

export enum OptionTypeCategory {
  Shade = "shade",
  Size = "size",
}

export interface SEO {
  "meta-description": string;
  "page-title": PageTitle;
}

export enum PageTitle {
  BuyRareBeautySoftPinchLiquidBlush = "Buy Rare Beauty Soft Pinch Liquid Blush",
  BuyRareBeautySoftPinchTintedLipOil = "Buy Rare Beauty Soft Pinch Tinted Lip Oil",
  BuyTarteShapeTapeContourConcealer = "Buy tarte Shape Tape Contour Concealer",
  Empty = "",
}

export interface Relationships {
  brand: Brand;
  "featured-variant": Brand;
  "featured-ad": Brand;
  "featured-review": Categories;
  categories: Categories;
  "option-types": OptionTypes;
  variants: Categories;
}

export interface Brand {
  data: DAT | null;
}

export interface DAT {
  type: DataType;
  id: string;
}

export enum DataType {
  Ads = "ads",
  Brands = "brands",
  OptionTypes = "option-types",
  Variants = "variants",
}

export interface Categories {}

export interface OptionTypes {
  data: DAT[];
}

export enum ProductType {
  Products = "products",
}
