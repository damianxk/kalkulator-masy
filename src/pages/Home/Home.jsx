import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ReactComponent as Logo } from "./grafika.svg";
import { useState } from "react";
import AluList from "../../components/AluList/AluList";
import StalList from "../../components/StalList/StalList";
import Aluminium from "../Aluminium/Aluminium";
import Stal from "../Stal/Stal";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <Header />
      <main>
        <section className={css.fullheight}>
          <section className={css.home}>
            <div className={css.HeroSection}>
              <h2 className={css.material}>
                Witaj na naszej stronie!
                <br />
                Nasz kalkulator do obliczania wagi stali i aluminium został
                zaprojektowany, aby ułatwić Ci życie. Nasze narzędzie dostarczy
                Ci precyzyjne i szybkie wyniki. Odkryj, jak łatwe może być
                obliczanie wagi metali!
              </h2>
              <Logo className={css.kalkulator} />
            </div>
            <section>
              <div className={css.buttonList}>
                <span>Wybierz materiał do obliczeń:</span>
                <button
                  onClick={() => handleClick("AluList")}
                  className={css.button}
                >
                  Aluminium
                </button>
                <button
                  onClick={() => handleClick("StalList")}
                  className={css.button}
                >
                  Stal Nierdzewna
                </button>
              </div>
              <section>
                {activeComponent === "AluList" && <Aluminium />}
                {activeComponent === "StalList" && <Stal />}
              </section>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
