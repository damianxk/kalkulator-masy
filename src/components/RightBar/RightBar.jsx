import React, { useEffect } from 'react';
import { useState } from 'react';
import img1 from '../../assets/carport-300x1100.png';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';

const RightBar = () => {
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

export default RightBar