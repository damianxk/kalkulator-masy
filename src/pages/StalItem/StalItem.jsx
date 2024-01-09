import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import StalItemDetail from "../../components/StalItemDetail/StalItemDetail";
import items from "../../data/stal.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./StalItem.module.css";

const StalItem = () => {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(itemId, 10));
  const location = useLocation();

  return (
    <>
      <Header />
      <Link to={`/stal`} state={{ from: location }} className={css.links}>
        Powrót do stali nierdzewnej
      </Link> 
      {selectedItem ? (
        <StalItemDetail item={selectedItem} />
      ) : (
        <div>Nie znaleziono przedmiotu</div>
      )}
      <Footer />
    </>
  );
};

export default StalItem;
