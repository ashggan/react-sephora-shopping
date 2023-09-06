export interface ProductFilters {
    id:            string;
    type:          string;
    attributes:    Attributes;
    relationships: Relationships;
}

export interface Attributes {
    "min-price":     number;
    "max-price":     number;
    "other-filters": string[];
}

export interface Relationships {
    brands:         Brands;
    categories:     Brands;
    "filter-types": Brands;
}

export interface Brands {
    data: Datum[];
}

export interface Datum {
    id:   string;
    type: Type;
}

export enum Type {
    Brands = "brands",
    Categories = "categories",
    FilterTypes = "filter-types",
}
