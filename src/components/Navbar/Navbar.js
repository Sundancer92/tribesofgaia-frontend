import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

//Redux
import { useSelector } from "react-redux";
//React Router
import { Outlet } from "react-router-dom";
//React Bootstrap
import { LinkContainer } from "react-router-bootstrap";

function CustomNavbar() {
	const { userName } = useSelector((state) => state.userData);

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
							{userName ? (
								<LinkContainer to="/logout">
									<Nav.Link>
										<Button variant="danger">LogOut</Button>
									</Nav.Link>
								</LinkContainer>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<Button variant="success">LogIn</Button>
									</Nav.Link>
								</LinkContainer>
							)}
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
