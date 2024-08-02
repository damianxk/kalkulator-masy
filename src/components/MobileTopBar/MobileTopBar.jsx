import React from 'react'
import { useEffect, useState } from 'react';
import img1 from '../../assets/carport-1100x300.png';
import img2 from '../../assets/mslide1.png';
import img3 from '../../assets/mslide2.png';
import css from './MobileTopBar.module.css'



const MobileTopBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      {img: img1, link: 'https://ulamex.com.pl/carport'},
      {img: img2, link: ''},
      {img: img3, link: ''},
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className="slider">
      <a href={images[currentIndex].link}>
        <img src={images[currentIndex].img} alt={`Slide ${currentIndex}`} width={'100%'} height={'100%'}/>
      </a>
    </div>
  )
}

export default MobileTopBar