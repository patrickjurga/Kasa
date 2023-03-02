import React from 'react';
import "./Info.css";

function Info( {infoTitle, infoLocation, infoTag} ) {

    return (
        <div className='Info__Container'>   
            <h2 className='Info__Title'>{infoTitle}</h2>
            <p>{infoLocation}</p>
            <div className="tags">
                {infoTag.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    )

}

export default Info;