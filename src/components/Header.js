import React, { Component } from 'react';
import './styles/Header.css'
const avatar = 'https://www.peterbe.com/avatar.random.png';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<header className="header-container">
					<img className="header-avatar" src={avatar} alt="avatar"></img>
					<h1 className="header-tittle">Hello Roller</h1>
				</header>
			</React.Fragment>
		);
	}
}

export default Header;
