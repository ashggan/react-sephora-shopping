import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Outlet />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
