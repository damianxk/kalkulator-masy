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
        title: "WPROWADZENIE DO KALKULATORA STALI",
        desc: 'Stal nierdzewna, znana również jako INOX, to prawdziwy fenomen w świecie materiałów. Co sprawia, że jest tak wyjątkowa?',
        imgpath: 'https://www.kalkulatorstali.com/blog/wp-content/uploads/2024/08/stalnierdzewna-1024x683.jpg',
        date: '1 sierpnia, 2024',
        link: 'https://www.kalkulatorstali.com/blog/2024/08/01/stal-nierdzewna-niezwykly-material-ktory-warto-poznac/'
    },
    {
        title: "KOMPLEKSOWY PRZEWODNIK",
        desc: 'Obliczanie wagi stali to kluczowy element w wielu dziedzinach, takich jak budownictwo, inżynieria, czy przemysł metalurgiczny.',
        imgpath: 'https://www.kalkulatorstali.com/blog/wp-content/uploads/2024/08/stal-768x512.jpg',
        date: '1 sierpnia, 2024',
        link: 'https://www.kalkulatorstali.com/blog/2024/08/01/kompleksowy-przewodnik-po-obliczaniu-wagi-stali-od-podstaw-do-zaawansowanych-technik/'
    },
    {
        title: "STAL NIERDZEWNA NIEZWYKŁY MATERIAŁ",
        desc: 'Stal nierdzewna, znana również jako INOX, to prawdziwy fenomen w świecie materiałów. Co sprawia, że jest tak wyjątkowa?',
        imgpath: 'https://www.kalkulatorstali.com/blog/wp-content/uploads/2024/08/stalnierdzewna-768x512.jpg',
        date: '1 sierpnia, 2024',
        link: 'https://www.kalkulatorstali.com/blog/2024/08/01/stal-nierdzewna-niezwykly-material-ktory-warto-poznac/'
    }
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
          <RightBar/>
        </div>
      </main>
      <div className={css.blog}>
        <ButtomBar/>
        <div className={css.posts}>
          <Post title={posts[2].title} desc={posts[2].desc} imgpath={posts[2].imgpath} data={posts[2].date} link={posts[2].link} />
          <Post title={posts[1].title} desc={posts[1].desc} imgpath={posts[1].imgpath} data={posts[1].date} link={posts[1].link} />
          <Post title={posts[0].title} desc={posts[0].desc} imgpath={posts[0].imgpath} data={posts[0].date} link={posts[0].link} />
        </div>
      </div>
      
      
    </>
  );
};

export default Home;
