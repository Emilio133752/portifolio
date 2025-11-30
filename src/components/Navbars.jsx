import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Navbars = () =>{
    return(
    <>
        <Navbar expand="lg" className="vBackGrondColor">
        <Container>
            <Navbar.Brand href="#home" className='vColors'>Emilio Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home" className='vColors'>Home</Nav.Link>
                <Nav.Link href="#link" className='vColors'>Skills</Nav.Link>
                <Nav.Link href="#link" className='vColors'>Projects</Nav.Link>
                <Nav.Link href="#link" className='vColors'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    )
}

export default Navbars