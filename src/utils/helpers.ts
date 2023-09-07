import { headers, BASE_URL } from "./constants";

type Params = {
  id?: string;
  size?: number;
  root_category?: string;
};

export const addParams =
  (url: string) =>
  (params: Params = {}) => ({
    url: BASE_URL + url,
    method: "GET",
    headers,
    params,
  });
