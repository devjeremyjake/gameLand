import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../Global/Devices';
import { Search } from '@styled-icons/evil/Search';

const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 50px;
	background: #02182b;
	color: #fff;

	@media ${device.mobileL} {
		padding: 10px 10px;
	}
`;

const Logo = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-weight: 600;
	letter-spacing: 3px;
`;

const Menus = styled.ul`
	display: flex;
`;
const MenuItemSearch = styled(Search)`
	color: #fff;
`;

const MenuItem = styled(Link)`
	color: #fff;
	text-decoration: none;
`;

export { Container, Logo, Menus, MenuItemSearch, MenuItem };
