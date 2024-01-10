import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AluList from "../../components/AluList/AluList";
import items from "../../data/alu.json";
import { Link, useLocation } from "react-router-dom";

const Aluminium = () => {
  const location = useLocation();
  return (
    <>
      <main>
        <AluList items={items} />
      </main>
      <Footer />
    </>
  );
};
export default Aluminium;
