import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StalList from "../../components/StalList/StalList";
import items from "../../data/stal.json";
import { Link, useLocation } from "react-router-dom";

const Aluminium = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <Link to={`/`} state={{ from: location }} className='links'>
          Powrót do strony głównej
        </Link>
        <StalList items={items} />
      </main>
      <Footer />
    </>
  );
};
export default Aluminium;
