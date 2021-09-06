import React, {useEffect} from 'react';
import axios from 'axios'
import WidgetCoins from '../components/WidgetCoins';
import {TableRewards} from '../components/TableRewards'
import {FormData} from '../components/FormData'
import './styles/Home.css';
import rltImg from '../images/rlt.svg'


const URLCOINS = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1";

const coins = [
	{ value: '30000', name: 'BTC', 	price: 0, img:"" , change24: 0},
	{	value: '0.005',	name: 'ETH', 	price: 0, img:"", change24: 0},
	{	value: '20',		name: 'DOGE', price: 0, img:"", change24: 0},
	{	value: '30',		name: 'RTL', 	price: 1, img:rltImg, change24: 0},
]

const hashes = [
	{	value: '1000000000',	name: 'GH/s'},
	{	value: '1000000000000',	name: 'TH/s'},
	{	value: '1000000000000000', name: 'PH/s'},
	{	value: '1000000000000000000',	name: 'EH/s'}
]

function Home () {
	const [coinsAdd, setCoinsAdd] = React.useState(coins);
	const [visibleWidget, setVisibleWidget] = React.useState(false);

	const coinsValues = (coinsApi) => {
		const newCoins = [...coins]
		for(let i = 0; i<3; i++){
			let value = coinsApi.find(coin => coin.symbol === coins[i].name.toLowerCase())
			newCoins[i].price = value.current_price
			newCoins[i].img = value.image
			newCoins[i].change24 = value.price_change_percentage_24h
		}
		setCoinsAdd(newCoins)
		setVisibleWidget(true);
		}

	useEffect(() => {
		const loadData = async () => {
			try {
				const request = await axios.get(URLCOINS)
				const coinsApi = await request.data
				console.log(request.data)
				await coinsValues(coinsApi)
			} catch (error) {
				console.error(error);
			}
		};
		loadData()
  }, []);

	const [ coinsChange, setCoinsChange ] = React.useState(0);
	const [ hashesChange, setHashesChange ] = React.useState(0);
	const [ perBLock, setPerBLock ] = React.useState(0.0000);
	const [ powerNet, setPowerNet ] = React.useState('');
	const [ yourPower, setYourPower ] = React.useState('');
	const [ perHour, setPerHour ] = React.useState(0.0000);
	const [ perDay, setPerDay ] = React.useState(0.0000);
	const [ perWeek, setPerWeek] = React.useState(0.0000);
	const [ perMonth, setPerMonth] = React.useState(0.0000);

	const coinChange = (e) =>{
		const valueCoin = e.target.value;
		const itemIndex = coins.findIndex(item => item.value === valueCoin);
		setCoinsChange(itemIndex)
	}
	const hashChange = (e) =>{
		const valueHash = e.target.value;
		const itemIndex = hashes.findIndex(item => item.value === valueHash);
		setHashesChange(itemIndex)
	}
	const onSubmit = (e) =>{
		e.preventDefault();
		const powerNetResult = powerNet * parseInt(hashes[3].value);
		console.log(powerNetResult)
		const yourPowerResult = yourPower * parseInt(hashes[hashesChange].value);
		console.log(yourPowerResult)
		const result = ((parseFloat(coins[coinsChange].value)) * (yourPowerResult / powerNetResult))
		console.log(result)
		if(isNaN(result)){
			setPerBLock(0.0000)
			setPerHour(0.0000);
			setPerDay(0.0000);
			setPerWeek(0.0000);
			setPerMonth(0.0000);
		} else { 
			if(coinsAdd[coinsChange].name === "BTC"){
				setPerBLock(result.toFixed(8))
				setPerHour((result * 6).toFixed(7));
				setPerDay((result * 144).toFixed(6));
				setPerWeek((result * 1008).toFixed(5));
				setPerMonth((result * 4320).toFixed(4));
			} else{
				setPerBLock(result.toFixed(8))
				setPerHour((result * 6).toFixed(8));
				setPerDay((result * 144).toFixed(8));
				setPerWeek((result * 1008).toFixed(8));
				setPerMonth((result * 4320).toFixed(8));
			}
		}
	}

		return (
			<React.Fragment>
			<div className="global-container">
				<div className="mid">
						<FormData
							coins={coins}
							coinsChange={coinsChange}
							coinChange={coinChange}
							onSubmit={onSubmit}
							powerNet={powerNet}
							setPowerNet={setPowerNet}
							yourPower={yourPower}
							hashChange={hashChange}
							hashes={hashes}
							setYourPower={setYourPower}
						/>
				</div>
				<div className="mid">
				<TableRewards
							perBLock={perBLock}
							perHour={perHour}
							perDay={perDay}
							perWeek={perWeek}
							perMonth={perMonth}
							coinsAdd={coinsAdd}
							coinsChange={coinsChange}
						/>
				</div>
				</div>
				<hr/>
					{visibleWidget === true &&	<WidgetCoins key={coinsAdd.name} coins={coinsAdd}/>}
			</React.Fragment>
		);
}

export default Home;
