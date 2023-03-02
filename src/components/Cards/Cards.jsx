import React from "react";
import "./Cards.css";

function Cards(props) {
    return (
        <div className="Cards__content">
            <img className="Cards__image" src={props.cover} alt={props.title} />
            <h2 className="Cards__title">{props.title}</h2>
        </div>
    );
}

export default Cards;