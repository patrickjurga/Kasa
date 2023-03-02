import { useState } from "react";
import "./Carousel.css"
import Chevron_gauche from "../../assets/images/chevron_gauche.png";
import Chevron_droit from "../../assets/images/chevron_droit.png";

function Carousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = pictures.length;
  
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };
  
    return (
      <div className="Carousel__Container">
        <img className="Carousel__btnLeft" src={Chevron_gauche} alt="" onClick={prevSlide} />
        <img className="Carousel__btnRight" src={Chevron_droit} alt="" onClick={nextSlide} />
        <div className="Carousel__counter">{currentSlide + 1}/{totalSlides}</div>
        <img className="Carousel__image" src={pictures[currentSlide]} alt="" />
      </div>
    );
  }

export default Carousel;