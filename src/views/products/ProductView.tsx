import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import fetchProduct from "../../utils/useFetchProductByid";
import { createElement, useMemo } from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";

export default function ProductView() {
  const { id } = useParams();
  const { increaseQuantity } = useShoppingCart();
  const { isLoading, data } = fetchProduct("/v2/list", id as string);

  const product = useMemo(() => data, [data]);

  const renderHTML = (rawHTML: string) =>
    createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        product && (
          <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="carousel rounded-box w-full h-[400px]">
              {product.attributes["image-urls"].map((img, i) => (
                <div className="carousel-item w-1/2" key={i}>
                  <img src={img} className="w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left flex flex-col space-y-5">
              <h1 className="text-2xl uppercase font-bold">
                {product.attributes.name}
              </h1>
              {renderHTML(product.attributes.description)}
              <p className="text-xl uppercase font-bold">benefits</p>
              {renderHTML(product.attributes.benefits)}
              <button
                className="btn btn-primary w-36"
                onClick={() =>
                  increaseQuantity(product.id, product.attributes.price)
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
}
