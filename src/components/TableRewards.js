import React from 'react';
import './styles/TableRewards.css'
const TableRewards = ({
	perBLock,
	perHour,
	perDay,
	perWeek,
	perMonth,
	coinsAdd,
	coinsChange
}) => {
	return (
		<>
			<table className="table-container">
				<thead className="col-container">
				<tr className="col">
						<td><h2 className="table-tittles">Rewards</h2></td>
						<td><h2 className="table-tittles">Value*</h2></td>
						<td><h2 className="table-tittles">Price in {coinsAdd[coinsChange].name}</h2></td>
				</tr>
				</thead>
				<tbody>
					<tr className="row">
						<td><h4>Per block: </h4></td>
						<td><p>{perBLock} </p></td>
						<td><p>${
							coinsAdd[coinsChange].name === "BTC" ?
								((coinsAdd[coinsChange].price/100000000)*perBLock).toFixed(2)
							:
							(coinsAdd[coinsChange].price*perBLock).toFixed(2)} </p></td>
					</tr>
					<tr className="row">
						<td><h4>Per hour: </h4></td>
						<td><p>{perHour} </p></td>
						<td><p>${coinsAdd[coinsChange].name === "BTC" ?
								((coinsAdd[coinsChange].price/100000000)*perHour).toFixed(2)
							:
							(coinsAdd[coinsChange].price*perHour).toFixed(2)} </p></td>
					</tr>
					<tr className="row">
						<td><h4>Per day: </h4></td>
						<td><p>{perDay} </p></td>
						<td><p>${coinsAdd[coinsChange].name === "BTC" ?
								((coinsAdd[coinsChange].price/100000000)*perDay).toFixed(2)
							:
							(coinsAdd[coinsChange].price*perDay).toFixed(2)} </p></td>
					</tr>
					<tr className="row">
						<td><h4>Per week:  </h4></td>
						<td><p>{perWeek} </p></td>
						<td><p>${coinsAdd[coinsChange].name === "BTC" ?
								((coinsAdd[coinsChange].price/100000000)*perWeek).toFixed(2)
							:
							(coinsAdd[coinsChange].price*perWeek).toFixed(2)} </p></td>
					</tr>
					<tr className="row">
						<td><h4>Per Month:</h4></td>
						<td><p>{perMonth} </p></td>
						<td><p>${coinsAdd[coinsChange].name === "BTC" ?
								((coinsAdd[coinsChange].price/100000000)*perMonth).toFixed(2)
							:
							(coinsAdd[coinsChange].price*perMonth).toFixed(2)} </p></td>
					</tr>
				</tbody>
			</table>
			<h2 className="info">These value are not officially*</h2>
		</>
	);
}

export {TableRewards};
