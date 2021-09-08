import React from 'react';
import './styles/WidgetCoins.css'

function WidgetCoins(props) {

	return (
		<React.Fragment>
			<div className="container">
				{props.coins.map((coin , index) => (
					<div className="info-container" key={index} index={index}>
						<h2 className="tittle-coin">
						<span className="image-coin">
							<img src={coin.img} alt={`${coin.name}-icon`}></img>
						</span>
						{coin.name}
						</h2>
						<p><strong>Price: </strong>${coin.price}</p>
						<p><strong>Change last 24hr:</strong></p>
						<p className={(coin.change24 >= 0) ? "green" : "red"}> {(coin.change24).toFixed(2)}%</p>
					</div>
				))}
			</div>
		</React.Fragment>
	);
}

export default WidgetCoins;
