import React from 'react';
import {Container, Navbar, NavDropdown} from "react-bootstrap";

export const Nav = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Docusign Shopping Cart</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Container>
		</Navbar>
	)
}
