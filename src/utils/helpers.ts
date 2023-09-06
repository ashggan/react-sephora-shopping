import { headers, BASE_URL } from "./constants";
import fetchProduct from "./useFetchProductByid";

interface Params {
  id?: string;
  size?: number;
  root_category?: string;
}

export const addParams =
  (url: string) =>
  (params: Params = {}) => ({
    url: BASE_URL + url,
    method: "GET",
    headers,
    params,
  });

export const getPrice = (id: string) => {
  const { data } = fetchProduct("/v2/list", id as string);
  return data.attributes.price;
};
