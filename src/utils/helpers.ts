import { headers } from "./constants";

interface Params {
  id?: string;
  size?: number;
  root_category?: string;
}

export const addParams =
  (url: string) =>
  (params: Params = {}) => ({
    url,
    headers,
    params,
  });
