import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import AluItemDetail from "../../components/AluItemDetail/AluItemDetail";
import items from "../../data/alu.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "../StalItem/StalItem.module.css";

const AluItem = () => {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(itemId, 10));
  const location = useLocation();

  return (
    <>
      <Header />
      <Link to={`/aluminium`} state={{ from: location }} className={css.links}>
        Powrót do aluminium
      </Link> 
      {selectedItem ? (
        <AluItemDetail item={selectedItem} />
      ) : (
        <div>Nie znaleziono przedmiotu</div>
      )}
      <Footer />
    </>
  );
};

export default AluItem;