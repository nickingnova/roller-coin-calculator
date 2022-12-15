import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styles/Header.css'
const avatar = 'https://www.peterbe.com/avatar.random.png';


function Header ({coins}) {

	const [addressVisible, setAddressVisible] = useState(false);
	const [indexCoin, setIndexCoin] = useState(0);
	// const [value, setValue] = useState(`${coins[0].address}`);
  const [copied, setCopied] = useState(false);


	const changeIndex = () => {
		if (indexCoin === 4) {
			setIndexCoin(0)
		} else {
			setIndexCoin(indexCoin+1)
		}
		// setValue(coins[indexCoin].address)
		setCopied(false)
	}
	useEffect(() =>{
		setTimeout(() => {
      setCopied(false);
    }, 2000);
	},[copied])

		return (
			<React.Fragment>
				<header className="header-container">
				<div className="header-start">
					<img className="header-avatar" src={avatar} alt="avatar"></img>
					<h1 className="header-tittle">Hello Roller</h1>
				</div>
				<div className="header-wallet">
					<h3 role="button" onClick={() => setAddressVisible(!addressVisible) && setCopied(false) && setIndexCoin(0)} className="wallet-tittle">
					Support Me
					</h3>
					{addressVisible &&
					<div className="wallet-address">
					  <div className="address-tittle">
								<h3>{coins[indexCoin].name}</h3>
								<img className="image-coin" src={coins[indexCoin].img} alt={`icon`}></img>
						</div>
								<div className="qr-wallet">
									<QRCode className="qr-wallet" value={coins[indexCoin].address} renderAs="canvas" size={256} level="H"/>
								</div>
								<button type="button" className="change-coin" onClick={changeIndex}>></button> 
						{copied && <span className="copied">Copied!</span>	}
						<div className="address-link">
						<br />
							<CopyToClipboard
										text={coins[indexCoin].address}
										onCopy={() => setCopied(true)}
										className="link"
									>
							<p className="link">
								Click to copy address:
								<br />
								{coins[indexCoin].address}
							</p>
      			</CopyToClipboard>
						</div>
					</div>
					}
				</div>
				</header>
			</React.Fragment>
		);
}

export {Header};
