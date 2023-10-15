/* eslint-disable no-unused-vars */
import "./App.css";
import TopMenu from "./components/Navbar/TopMenu";
import Products from "./components/Products/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <TopMenu />
      <Products />
    </>
  );
}

export default App;
