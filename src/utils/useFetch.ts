import { useEffect, useState } from "react";
import axios from "axios";
import { addParams } from "./helpers";
import products from "../types/data.json";
import { Product } from "../types/product";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async (url: string) => {
      try {
        if (import.meta.env.MODE === "development") {
          setTimeout(() => {
            setIsLoading(false);
            setData(products as Product[]);
          }, 1000);
        } else {
          console.log("online");
          const res = await axios.request(addParams(url)());
          const data = res.data;
          setData(data.data);
          setIsLoading(false);
        }
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
