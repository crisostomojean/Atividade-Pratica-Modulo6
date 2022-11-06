import React from 'react'

import {
	NavLink
} from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header className="container">
			<nav>
				
				<input type="checkbox" id="check" />
				<label for="check" className="button">
					<span></span>
					<span></span>
					<span></span>
				</label>
				<ul className="menu">
					<li>
						<NavLink activeClassName="active" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/Clientes">
							Clientes
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/Destinos">
							Destinos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
