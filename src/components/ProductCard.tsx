import { Link } from "react-router-dom";
import { ProductProp } from "../types/props";

export default function ProductCard({ product }: ProductProp) {
  const slug = product.attributes["slug-url"];
  const id = product.id;
  return (
    <Link to={`/${id}/${slug}`}>
      <div className="card p-0 bg-base-100 shadow-xl">
        <figure>
          <img src={product.attributes["default-image-urls"][0]} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.attributes.name}
           </h2>
           <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
