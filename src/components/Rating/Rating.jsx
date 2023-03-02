import React from 'react';
import "./Rating.css"
import fullStar from "../../assets/images/full_star.png";
import emptyStar from "../../assets/images/empty_star.png";

function Rating({ rating }) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const starElements = [];
  
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<img className='stars' key={i} src={fullStar} alt="Full Star"/>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<img className='stars' key={i + fullStars} src={emptyStar} alt="Empty Star"/>);
    }
  
    return (
      <div className="rating">
        {starElements}
      </div>
    );
  }
  
  export default Rating;