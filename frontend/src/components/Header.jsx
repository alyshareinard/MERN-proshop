import { Navbar, Nav, Container} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav classname="ms-auto">
                            <Nav.link href="/cart"><FaShoppingCart/>Cart </Nav.link>
                            <Nav.link href="/login"><FaUser /> Sign In</Nav.link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}