import React from 'react'
import { useEffect, useState } from 'react';
import img1 from '../../assets/Carport/carport-1100x300.png';
import img2 from '../../assets/Marketstal/marketstal-1100x300.png';
import img3 from '../../assets/Profile/profile-ocynkowane-1100x300.png';
import css from './MobileTopBar.module.css'




const MobileTopBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      {img: img1, link: 'https://carport.ulamex.com.pl/'},
      {img: img2, link: 'https://marketstal.pl/'},
      {img: img3, link: 'https://profileocynkowane.com.pl/'},
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 60000);
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className={css.slider}>
      <a href={images[currentIndex].link}>
        <img src={images[currentIndex].img} alt={`Slide ${currentIndex}`} className={css.image} />      </a>
    </div>
  )
}

export default MobileTopBar