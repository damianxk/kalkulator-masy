import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import AluItemDetail from "../../components/AluItemDetail/AluItemDetail";
import items from "../../data/alu.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AluItem = () => {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(itemId, 10));
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="linksdiv">
        <Link to={`/aluminium`} state={{ from: location }} className="links">
          <span className="linkback">Powrót do aluminium</span>
        </Link>
        <h2
          style={{
            display: "inline",
            lineHeight: 1,
          }}
        >
          ALUMINIUM {selectedItem.name}
        </h2>
      </div>
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
