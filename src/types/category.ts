export interface CategoryApiType {
  data: Category[];
  meta: Meta;
}

export interface Category {
  id: string;
  type: Type;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  "slug-url": string;
  "parent-id": number | null;
  label: string;
  "top-level": boolean;
  position: number;
  "mobile-image-url": null | string;
  "mobile-app-menu-image"?: string;
  "mobile-app-menu-image-ios"?: string;
  "mobile-app-menu-image-android"?: string;
  "mobile-app-banner-image": null;
  level: number;
}

export interface Relationships {
  children: Children;
  parent: Parent;
}

export interface Children {
  data: DAT[];
}

export interface DAT {
  id: string;
  type: Type;
}

export enum Type {
  Categories = "categories",
}

export interface Parent {
  data: DAT | null;
}

export interface Meta {
  count: number;
}
