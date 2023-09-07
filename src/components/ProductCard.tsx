import { Link } from "react-router-dom";
import { ProductProp } from "../types/props";
import { useShoppingCart } from "../context/shoppingCartContext";

export default function ProductCard({ product }: ProductProp) {
  const slug = product.attributes["slug-url"];
  const id = product.id;
  const { increaseQuantity } = useShoppingCart();
  return (
    <div className="card p-0 bg-[#fff] shadow-xl">
      <Link to={`/${id}/${slug}`}>
        <figure className="p-16">
          <img
            src={product.attributes["default-image-urls"][0]}
            alt={product.attributes.name}
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title text-lg">{product.attributes.name}</h2>
        <div className="card-actions justify-between">
          <div className="font-bold text-md">{product.attributes.price} $</div>
          <button
            className="badge badge-primary p-4"
            onClick={() => increaseQuantity(id, product.attributes.price)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
// font-size: 1.25rem/* 20px */;
