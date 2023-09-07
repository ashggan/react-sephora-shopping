import { Category } from "./category";
import { Product } from "./product";
import { ProductFilters } from "./product_filters";
import Task from "./task";

export interface TaskListProps {
  tasks: Task[];
}

export interface ProductProp {
  product: Product;
}

export interface CategoryProp {
  categories: Category[];
}

export interface CategoryFilterProp {
  productFilters: ProductFilters[];
}
