import { headers, BASE_URL } from "./constants";

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
