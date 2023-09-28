import { useShoppingCart } from "../context/shoppingCartContext";

const ShoppingCart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getTotal,
    checkout,
  } = useShoppingCart();

  return (
    <div className="mt-12 ">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2 lg:grid-cols-2">
              <div key={item.id} className=" container flex items-center mb-4">
                <div>
                  {/* <h3 className="text-lg font-medium">{item.name}</h3> */}
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      data-testid="decrease"
                      className="text-gray-500 hover:text-gray-700 mr-2"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="text-gray-700" data-testid="amount">
                      {item.quantity}
                    </span>
                    <button
                      data-testid="increase"
                      className="text-gray-500 hover:text-gray-700 ml-2"
                      onClick={() => increaseQuantity(item.id, item.price)}
                    >
                      +
                    </button>
                    <button
                      data-testid="remove"
                      className="ml-4 text-red-600 hover:text-red-800"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <p className="text-xl font-medium">Total: ${getTotal()}</p>
            <button
              data-testid="checkout"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={() => checkout()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
