import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AluList from "../../components/AluList/AluList";
import items from "../../data/alu.json";
import { Link, useLocation } from "react-router-dom";

const Aluminium = () => {
  const location = useLocation();
  return (
    <>
      <Header />

      <div className="linksdiv">
        <Link to={`/`} state={{ from: location }} className="links">
          Powrót do strony głównej
        </Link>
        <h2
          style={{
            display: "inline",
            lineHeight: 1,
          }}
        >
          ALUMINIUM
        </h2>
      </div>
      <main>
        <AluList items={items} />
      </main>
      <Footer />
    </>
  );
};
export default Aluminium;
