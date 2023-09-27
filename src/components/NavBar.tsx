import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";

export default function NavBar() {
  const { getItemsTotal, getTotal } = useShoppingCart();

  // const image = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
  return (
    <div className=" shadow-lg ">
      <div className="navbar bg-base-100">
        <div className="flex-1 normal-case text-2xl font-bold">
          <NavLink to="/" data-testid="title">
            Style
          </NavLink>
          {/* <a className="btn btn-ghost ">daisyUI</a> */}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                <span
                  className="badge badge-sm indicator-item"
                  data-testid="cart-items-count"
                >
                  {getItemsTotal()}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              data-testid="cart-details"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {getItemsTotal()} Items
                </span>
                <span className="text-info">Subtotal: ${getTotal()}</span>
                <div className="card-actions">
                  <NavLink
                    to="/cart"
                    className="btn btn-primary btn-block"
                    data-testid="cart-btn"
                  >
                    View cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
