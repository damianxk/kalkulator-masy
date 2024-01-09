import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as Logo } from "./kalkulator.svg";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <h2 className={css.h2h2} style={{ fontSize: "30px" }}>
          Twój niezawodny partner w obliczaniu wagi stali i aluminium
        </h2>
        <section className={css.home}>
          <div className={css.buttonList}>
            <h2 className={css.material}>
              Witaj na naszej stronie! 
              <br />
              Nasz kalkulator do obliczania wagi stali
              i aluminium został zaprojektowany, aby ułatwić Ci życie. Nasze narzędzie dostarczy Ci precyzyjne i szybkie wyniki. Odkryj, jak łatwe może być obliczanie wagi metali!
            </h2>
            <span>Wybierz materiał do obliczeń:</span>
            <Link
              to={`/aluminium`}
              state={{ from: location }}
              className={css.link}
            >
              <button className={css.button}>Aluminium</button>
            </Link>
            <Link to={`/stal`} state={{ from: location }} className={css.link}>
              <button className={css.button}>Stal Nierdzewna</button>
            </Link>
          </div>
          <Logo className={css.kalkulator} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
