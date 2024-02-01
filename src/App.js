import "./styles.css";
// import { Route, Routes } from "react-router-dom";
// import Aluminium from "./pages/Aluminium/Aluminium";
// import Stal from "./pages/Stal/Stal";
// import AluItem from "./pages/AluItem/AluItem";
// import StalItem from "./pages/StalItem/StalItem";
// import Cart from './pages/Cart/Cart';
import Home from "./pages/Home/Home";
import { StrictMode } from "react";

export default function App() {
  return (
    <StrictMode>
      {/* <Routes> */}
        <Home />
        {/* <Route path="/aluminium" element={<Aluminium />} />
        <Route path="/aluminium/:itemId" element={<AluItem />} />
        <Route path="/stal" element={<Stal />} />
        <Route path="/stal/:itemId" element={<StalItem />} />
        <Route path="/cart" element={<Cart />} /> */}
      {/* </Routes> */}
    </StrictMode>
  );
}
