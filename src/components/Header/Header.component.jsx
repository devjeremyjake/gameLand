import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Head from './headerStyle';

const Header = () => {
	return (
		<div>
			<Head.Container>
				<Head.Logo to="/">GameLand</Head.Logo>
				<Head.Menus>
					<Head.MenuItemSearch></Head.MenuItemSearch>
					<Head.MenuItem to="/">Login</Head.MenuItem>
				</Head.Menus>
			</Head.Container>
			<Outlet />
		</div>
	);
};

export default Header;
