import { FETCH_PRODUCTS } from "../../utils/actionTypes";
import { Product } from "../../types/product";

// export const productsActions = {};

export const FetchProducts = (product: Product) => {
  return {
    type: FETCH_PRODUCTS,
    payload: product,
  };
};
