import { Product } from "./product";

export interface APIProducts {
  data: Product[];
  meta: Meta;
  included: Included[];
}

export interface APIProduct {
  data: Product;
  included: Included[];
}

export interface DatumAttributes {
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
  "option-type-categories": Category[];
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

export enum Category {
  None = "none",
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

export interface Brand {
  data: DAT | null;
}

export interface DAT {
  type: Type;
  id: string;
}

export enum Type {
  Ads = "ads",
  Brands = "brands",
  OptionTypes = "option-types",
  OptionValues = "option-values",
  Products = "products",
  Variants = "variants",
}

export interface Categories {}

export interface Option {
  data: DAT[];
}

export interface Included {
  type: Type;
  id: string;
  attributes: IncludedAttributes;
  relationships?: IncludedRelationships;
}

export interface IncludedAttributes {
  name?: string;
  "brand-limit"?: null;
  "mobile-app-banner-image"?: null;
  "slug-url"?: string;
  category?: Category;
  value?: string;
  "option-type-id"?: number;
  upc?: string;
  "sephora-id"?: null;
  price?: number;
  "original-price"?: number;
  labels?: any[];
  "icon-url"?: string;
  "icon-image-urls"?: string[];
  "cart-image-urls"?: string[];
  "featured-image-urls"?: string[];
  "default-image-urls"?: string[];
  "closeup-image-urls"?: string[];
  "zoom-image-urls"?: string[];
  "display-price"?: string;
  "display-original-price"?: string;
  "under-sale"?: boolean;
  "sale-text"?: null | string;
  inventory?: number;
  "sold-out"?: boolean;
  available?: boolean;
  "new-arrival"?: boolean;
  "available-platforms"?: AvailablePlatform[];
  "image-urls"?: string[];
  "product-name"?: string;
  "brand-name"?: string;
  "brand-slug-url"?: string;
  sticker?: boolean;
  id?: number;
  "short-title"?: string;
  "variant-ids"?: number[];
  "icon-type"?: string;
}

export enum AvailablePlatform {
  MobileApp = "mobile_app",
  MobileWeb = "mobile_web",
  Web = "web",
}

export interface IncludedRelationships {
  "option-values"?: Option;
  "option-type"?: Categories;
  product?: Brand;
}

export interface Meta {
  total: number;
  "total-pages": number;
  "total-items": number;
  "current-page": number;
  "per-page": number;
}
