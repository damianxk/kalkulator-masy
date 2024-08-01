import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Aluminium from "../Aluminium/Aluminium";

import gestoscalu from "../../data/gestoscalu.json";
import gestoscstali from "../../data/gestoscstali.json";
import gestoscnierdzewnej from "../../data/gestoscnierdzewnej.json";
import RightBar from "../../components/RightBar/RightBar";
import ButtomBar from "../../components/ButtomBar/ButtomBar";
import PostList from "../../components/PostList/PostList";
import MobileTopBar from "../../components/MobileTopBar/MobileTopBar";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("AluList");
  const [density, setDensity] = useState("2.7");

  return (
    <>
      <Header />
      <main>
        <section className={css.fullheight}>
          <section className={css.home}>
            <div className={css.mobileads}>
              <MobileTopBar />
            </div>
            <div className={css.buttonList}>
              <button
                onClick={() => {
                  setActiveComponent("AluList");
                  setDensity(gestoscalu[0].value);
                }}
                className={`${css.button} ${
                  activeComponent === "AluList" ? css.buttonActive : ""
                }`}
              >
                Aluminium
              </button>
              <button
                onClick={() => {
                  setActiveComponent("stal");
                  setDensity(gestoscstali[0].value);
                }}
                className={`${css.button} ${
                  activeComponent === "stal" ? css.buttonActive : ""
                }`}
              >
                STAL
              </button>
              <button
                onClick={() => {
                  setActiveComponent("StalList");
                  setDensity(gestoscnierdzewnej[0].value);
                }}
                className={`${css.button} ${
                  activeComponent === "StalList" ? css.buttonActive : ""
                }`}
              >
                Stal Nierdzewna
              </button>
            </div>
            <section>
              <Aluminium
                activeComponent={activeComponent}
                density={density}
                setDensity={setDensity}
              />
            </section>
          </section>
        </section>
        <div className={css.rightbar}>
          <RightBar/>
        </div>
      </main>
      <ButtomBar/>
      <PostList/>
      
    </>
  );
};

export default Home;
