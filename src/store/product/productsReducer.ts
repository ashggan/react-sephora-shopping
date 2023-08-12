import { ProductAction } from "../../types/actions";
import { Product } from "../../types/product";

export default function productsReducer(
  state: Product[] = [],
  action: ProductAction
) {
  switch (action.type) {
    case action.FETCH_PRODUCTS:
      return [...state];
    default:
      return state;
  }
}
