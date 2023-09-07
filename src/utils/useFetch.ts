import { useEffect, useState } from "react";
import axios from "axios";
import { addParams } from "./helpers";
// import products from "../types/data.json";
import { Product } from "../types/product";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async (_url: string) => {
      try {
        const res = await axios.request(addParams(url)());
        const data = res.data;
        setData(data.data);
        setIsLoading(false);
        console.log(res.data);
        // setTimeout(() => {
        //   setIsLoading(false);
        //   setData(products);
        // }, 1000);
      } catch (err: any) {
        setServerError(err?.message);
        setIsLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { isLoading, data, serverError };
};

export default useFetch;
