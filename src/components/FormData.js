import React from 'react';
import './styles/FormData.css'

const FormData = ({
	coins,
	coinsChange,
	coinChange,
	onSubmit,
	powerNet,
	setPowerNet,
	setRewardBlock,
	rewardBlock,
	yourPower,
	hashChange,
	hashes,
	setYourPower
}) => {
	return (
		<>
			<form className="form-container form" onSubmit={onSubmit}>
				<h1 className="form-title">Calculator</h1>
				<div className="form-group">
						<h2 className="form-subTitle">Block Reward in
						<select className="selector" name="coins" onChange={coinChange}>
						{coins.map(coin => <option key={coin.value} value={coin.value}>{coin.name}</option>)}
						</select>
						is
							<input
								onChange={e => setRewardBlock(e.target.value)}
								value={rewardBlock}
								className="form-control reward"
								type="number"
								name="powerNet"
								placeholder={coins[coinsChange].value}
								required={true}
							/> ( 10 min now ) </h2>
				</div>
				<div className="form-group">
						<label className="label">Power Network in {coins[coinsChange].name}: </label>
						<div>
							<input
								onChange={e => setPowerNet(e.target.value)}
								value={powerNet}
								className="form-control"
								type="number"
								name="powerNet"
								required={true}
							/>
							<label className="label right">(EH/s)</label>
						</div>
					</div>
					<div className="form-group">
						<label className="label">Your Power in {coins[coinsChange].name}: </label>
						<div>
							<input
								onChange={e => setYourPower(e.target.value)}
								value={yourPower}
								className="form-control"
								type="number"
								name="yourPower"
								required={true}
							/>
							<select name="hashes" className="selector" onChange={hashChange}>
							{hashes.map(hash => <option key={hash.value} value={hash.value}>{hash.name}</option>)}
							</select>
						</div>
					</div>
					<button type="submit" className="btn">Calculate</button>
			</form>
		</>
	);
}

export {FormData};
