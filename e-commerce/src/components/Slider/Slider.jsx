import React from 'react'
import { useState } from 'react';
import './Slider.css'
import { BsArrowLeft, BsArrowRight} from "react-icons/bs";



function Slider() {
    const [Slide,setSlide]=useState(0);
    const prevSlide=()=>{
        setSlide(Slide===0? 2:Slide-1);
    }

    const nextSlide=()=>{
        setSlide(Slide===2?0: Slide+1);
    }

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
  return (
    <div className="slider">
        <div className="slider-img" style={{transform: `translateX(-${Slide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="slider-next">
            <div onClick={prevSlide}><BsArrowLeft/></div>
            <div onClick={nextSlide}><BsArrowRight/></div>

        </div>
    </div>

  )
}

export default Slider