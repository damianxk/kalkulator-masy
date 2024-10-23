import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Aluminium from "../Aluminium/Aluminium";

import gestoscalu from "../../data/gestoscalu.json";
import gestoscstali from "../../data/gestoscstali.json";
import gestoscnierdzewnej from "../../data/gestoscnierdzewnej.json";
import RightBar from "../../components/RightBar/RightBar";
import ButtomBar from "../../components/ButtomBar/ButtomBar";
import MobileTopBar from "../../components/MobileTopBar/MobileTopBar";
import { Post } from "../../components/Post/Post";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("AluList");
  const [density, setDensity] = useState("2.7");
  const posts = [
    {
      title: "ILE WAŻĄ PRĘTY ZBROJENIOWE?",
      desc: "Pręty zbrojeniowe to jeden z kluczowych elementów konstrukcyjnych stosowanych w budownictwie.",
      imgpath:
        "https://www.kalkulatorstali.com/blog/wp-content/uploads/2024/08/ile-waza-prety-zbrojeniowe-768x513.jpg",
      date: "30 sierpnia, 2024",
      link: "https://www.kalkulatorstali.com/blog/2024/08/30/ile-waza-prety-zbrojeniowe/",
    },
    {
      title: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
      desc: "W tym artykule zebraliśmy dla Ciebie najczęściej zadawane pytania. Starannie opracowaliśmy poniższy zestaw pytań i odpowiedzi.",
      imgpath:
        "https://www.kalkulatorstali.com/blog/wp-content/uploads/2024/08/najczesciej-zadawane-pytania-768x513.jpg",
      date: "30 sierpnia, 2024",
      link: "https://www.kalkulatorstali.com/blog/2024/08/30/najczesciej-zadawane-pytania/",
    },
      {
        title: "RODZAJE I WŁAŚCIWOŚCI …",
        desc: "Dwuteowniki to jedne z najważniejszych elementów konstrukcyjnych stosowanych w budownictwie i przemyśle.",
        imgpath:
          "https://www.kalkulatorstali.com/blog/wp-content/uploads/2024/09/worker-is-controlling-process-rail-cutting-busy-metal-factory-768x512.jpg",
        date: "26 września, 2024",
        link: "https://www.kalkulatorstali.com/blog/2024/09/26/rodzaje-i-wlasciwosci-dwuteownikow/",
      },
      
    ];

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
          <RightBar />
        </div>
      </main>
      <div className={css.blog}>
        <div className={css.posts}>
          <Post
            title={posts[2].title}
            desc={posts[2].desc}
            imgpath={posts[2].imgpath}
            data={posts[2].date}
            link={posts[2].link}
          />
          <Post
            title={posts[1].title}
            desc={posts[1].desc}
            imgpath={posts[1].imgpath}
            data={posts[1].date}
            link={posts[1].link}
          />
          <Post
            title={posts[0].title}
            desc={posts[0].desc}
            imgpath={posts[0].imgpath}
            data={posts[0].date}
            link={posts[0].link}
          />
        </div>
        <ButtomBar />
      </div>
    </>
  );
};

export default Home;
