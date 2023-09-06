import { useMemo } from "react";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/product";

import useFetch from "../../utils/useFetch";

export default function ProductsList() {
  const { isLoading, data, serverError } = useFetch("/v2/list");
  const products = useMemo(() => data, [data]);
  const handleRefresh = () => window.location.reload(); // Refresh the page
  if (serverError) {
    return (
      <>
        <div className="h-[100vh] mt-10">
          <p className="text-center text-xl font-bold ">{serverError}</p>
          <button className="btn " onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-3 lg:grid-cols-4">
            {products &&
              products.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </>
      )}
    </>
  );
}
