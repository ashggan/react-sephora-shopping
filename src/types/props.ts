import { Category } from "./category";
import { Product } from "./product";
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
