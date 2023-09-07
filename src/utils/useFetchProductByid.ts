import { useEffect, useState } from "react";
import axios from "axios";
import { addParams } from "./helpers";
import products from "../types/data.json";
import { Product } from "../types/product";

const fetchProduct = (url: string, id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product>();
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async (url: string, id: string) => {
      try {
        if (import.meta.env.MODE === "development") {
          setTimeout(() => {
            const product = products.filter((p) => p.id === id);
            //   console.log(product);
            setIsLoading(false);
            setData(product[0] as Product);
          }, 1000);
        } else {
          console.log("online");
          const res = await axios.request(addParams(url)({ id }));
          const data = res.data;
          setIsLoading(false);
          setData(data.data);
        }
      } catch (err: any) {
        setServerError(err?.message);
        setIsLoading(false);
      }
    };

    fetchData(url, id);
  }, [url]);

  return { isLoading, data, serverError };
};

export default fetchProduct;
