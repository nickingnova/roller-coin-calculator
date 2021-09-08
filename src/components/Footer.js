import React from 'react';
import './styles/Footer.css'
import promotion from '../images/w460h60.gif';
import logoNick from '../images/logotipo.png';

function Footer (){
		return (
			<React.Fragment>
				<footer className="footer-container">
					<h2 className="footer-tittle">By<a className="logo-container" target="_blank" rel="noreferrer" href="https://nickingnova.github.io/"><img className="logo-nick" src={logoNick} alt="logo-nick"/></a></h2>
					<ul className="social-container">
						<li className="icons-container"><a className="icons" target="_blank" rel="noreferrer" href="https://twitter.com/nickingnova">Twitter</a></li>
						<li className="icons-container"><a className="icons" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nicolas-fernandez-6b4b23b1/">Linkedin</a></li>
						<li className="icons-container"><a className="icons" target="_blank" rel="noreferrer" href="https://github.com/nickingnova">GitHub</a></li>
					</ul>
					<a className="promo-container" target="blank" href="https://rollercoin.com/?r=kc041d0j">
						<img className="promo" src={promotion} alt="RollerPromo"/>
					</a>
				</footer>
			</React.Fragment>
		);
}

export {Footer};
