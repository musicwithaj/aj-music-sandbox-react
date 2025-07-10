import { Container, Navbar, Nav } from 'react-bootstrap'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    🎵 Music Sandbox
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/synthesizer">Synthesizer</Nav.Link>
                        <Nav.Link href="/sequencer">Sequencer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;