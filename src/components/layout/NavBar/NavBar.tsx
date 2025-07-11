import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
                    <Nav className='profile-nav'>
                        <Nav.Item>
                            <div className="d-flex flex-row align-items-center gap-2">
                                <Image src="/images/aj_profile.JPEG" roundedCircle className="profile-image" />
                            </div>
                        </Nav.Item>
                        <NavDropdown title={user} id="nav-dropdown" align="end">
                            {/* Use eventKey to handle clicks programatically and prevent default navigation. Good for modals or state changes */}
                            {/* Use href for simple page navigation, for normal browser navigation behavior, and for SEO-friendly links */}
                            <NavDropdown.Item eventKey="4.1">👤 Profile</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">⚙️ Settings</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">🎧 Studio</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4">🚪 Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;