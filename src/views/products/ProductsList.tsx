// import { useEffect } from "react";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import SearchProduct from "../../components/SearchProduct";
import { useGetCategoriesListQuery } from "../../services/categoryApi";
import {
  useGetProdyctsListQuery,
  useSeatchProductByCategoryQuery,
} from "../../services/productsApi";
import { Product } from "../../types/product";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProducts,
//   getProductsList,
//   getProductsStatus,
// } from "../../store/product/productSlice";

export default function ProductsList() {
  const { data, isLoading } = useGetProdyctsListQuery("");
  const { data: categoriesData } = useGetCategoriesListQuery("");

  const products = data?.data;
  const categories = categoriesData?.data;

  // ########################################
  // const dispatch = useDispatch();
  // const productList = useSelector(getProductsList);
  // const productsStatus = useSelector(getProductsStatus);

  // useEffect(() => {
  //   if (productsStatus === "idle") {
  //     // dispatch(fetchProducts());
  //   }
  // });

  // const { data: CateData } = useSeatchProductByCategoryQuery("makeup");
  // console.log(CateData?.data);

  // useEffect(() => {}, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {categories && <SearchProduct categories={categories} />}

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
