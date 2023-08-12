import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
// import Searchproduct from "../../components/Searchproduct";
import { useGetProdyctsListQuery } from "../../services/productsApi";
import { Product } from "../../types/product";

export default function ProductsList() {
  const { data, isLoading } = useGetProdyctsListQuery("");

  const products = data?.data;

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
