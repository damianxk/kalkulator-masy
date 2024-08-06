import React, { useEffect, useState } from "react";
import img1 from "../../assets/Carport/carport-300x1100.png";
import img2 from "../../assets/Marketstal/marketstal-300x1100.png";
import img3 from "../../assets/Profile/profile-ocynkowane-300x1100.png";

const RightBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { img: img1, link: "https://carport.ulamex.com.pl/" },
    { img: img2, link: "https://marketstal.pl/" },
    { img: img3, link: "https://profileocynkowane.com.pl/" },
  ];

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex(Math.floor(Math.random() * images.length));
    };

    const getNextMinuteTimeout = () => {
      const now = new Date();
      const nextMinute = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes() + 1,
        0,
        0
      );
      return nextMinute - now;
    };

    const timeout = setTimeout(() => {
      changeImage();
      setInterval(changeImage, 60000); // Zmieniaj obraz co 60 sekund
    }, getNextMinuteTimeout());

    return () => clearTimeout(timeout);
  }, [images.length]);

  return (
    <div className="slider">
      <a href={images[currentIndex].link}>
        <img
          src={images[currentIndex].img}
          alt={`Slide ${currentIndex}`}
          width={"100%"}
          height={"100%"}
        />
      </a>
    </div>
  );
};

export default RightBar;
