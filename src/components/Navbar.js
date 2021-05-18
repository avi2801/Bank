import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Navbar, NavbarBrand, Collapse, NavItem, NavLink, Nav, NavbarToggler } from 'reactstrap'



const Navbar1 = (props) => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div >
			<Navbar className="background" light-expand="md">
				<NavbarBrand className="links ml-13" href="/">
					<img src={logo} width="30" height="30" class="d-inline-block align-top " alt=""/>
					Bank Of North
				</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar></Collapse>
					<Nav >
						<NavItem>
						<NavLink className="links" href="/AboutUs">About Us!</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="links" href="/ConstumerList">Customer-Lists</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="links" href="/Transaction">Transfer-Money</NavLink>
						</NavItem>
						<NavItem>
						<NavLink className="links" href="/table">Transaction table</NavLink>
						</NavItem>
					</Nav >
			</Navbar>
		</div>


	)
}

export default Navbar1;

