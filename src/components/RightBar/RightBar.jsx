import React, { useEffect } from 'react';
import { useState } from 'react';
import img1 from '../../assets/slide1.jpg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';

const RightBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1,
        img2,
        img3
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} width={'100%'} height={'100%'}/>
    </div>
  )
}

export default RightBar