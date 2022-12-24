import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Outlet } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

function CustomNavbar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand to="/">Tribes of Gaia</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/gifts">
								<Nav.Link>Gifts</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/spirits">
								<Nav.Link>Spirits</Nav.Link>
							</LinkContainer>
						</Nav>

						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				<Outlet />
			</Container>
		</>
	);
}

export default CustomNavbar;
