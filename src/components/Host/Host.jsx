import React from 'react';
import "./Host.css";

function Host( {hostImage, hostName} ) {
	return (
		<div className="Host__Container">
			<div className="Host__Name">{hostName}</div>
			<div className="Host__Picture">
				<img src={hostImage} alt={hostName}/>
			</div>
		</div>
	);
}

export default Host;