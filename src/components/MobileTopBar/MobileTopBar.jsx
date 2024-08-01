import React from 'react'
import { useEffect, useState } from 'react';
import mimg1 from '../../assets/mslide1.png';
import mimg2 from '../../assets/mslide2.png';


const MobileTopBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        mimg1,
        mimg2
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

export default MobileTopBar