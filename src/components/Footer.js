import React, { Component } from 'react';
import './styles/Footer.css'
import promotion from '../images/w460h60.gif';
import logoNick from '../images/logotipo.png';

class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className="footer-container">
					<h2 className="footer-tittle">By<a className="logo-container" target="_blank" href="/"><img className="logo-nick" src={logoNick} alt="logo-nick"/></a></h2>
					<ul className="social-container">
						<li className="icons-container"><a className="icons"  target="_blank" href="/">Twitter</a></li>
						<li className="icons-container"><a className="icons" target="_blank" href="/">Linkedin</a></li>
						<li className="icons-container"><a className="icons" target="_blank" href="/">GitHub</a></li>
					</ul>
					<a className="promo-container" target="blank" href="https://rollercoin.com/?r=kc041d0j">
						<img className="promo" src={promotion} alt="RollerPromo"/>
					</a>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;
