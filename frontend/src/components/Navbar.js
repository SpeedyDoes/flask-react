// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/auth/login" activeStyle>
						Login
					</NavLink>
					<NavLink to="/auth/signup" activeStyle>
						Sign up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
