import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import './NavBar.css'

interface NavBarProps {
    user?: string;
    theme?: 'light' | 'dark';
}

const NavBar: React.FC<NavBarProps> = ({
    user = 'AJ John',
    theme = 'dark'
}) => {
    return (
        <Navbar bg={theme} variant={theme} expand="lg">
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
                    <Nav className="profile-section">
                        <Nav.Link href="/profile">{user}</Nav.Link>
                        <Image src="/images/aj_profile.JPEG" roundedCircle className="profile-image" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;