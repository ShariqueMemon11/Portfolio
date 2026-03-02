import { useState , useEffect} from 'react';
import {Navbar , Nav , Container} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import { Github } from 'react-bootstrap-icons';
import logo from '../assets/img/S-logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
export const NavBar = () => {
  const [activeLink , setactiveLink] = useState('home')
  const [Scrolled , setScrolled] = useState(false)
  const location = useLocation();
  
  useEffect (() => {
    const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    
    window.addEventListener("scroll", onScroll);

    return() => window.removeEventListener("scroll" , onScroll)
  },[])
  
  const onUpdateActiveLink = (value) =>{
    setactiveLink(value);
  }
  
  return (
    <Navbar expand="md" className={Scrolled ? "scrolled" : ''} >
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === '/projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
                <a href='https://www.linkedin.com/in/shariq-memon-91438b24b/' target='_blank' rel='noopener noreferrer'> <img src={navIcon1} alt='LinkedIn'/> </a>
                <a href='https://github.com/ShariqueMemon11' target='_blank' rel='noopener noreferrer' className='github-icon'> <Github size={20} /> </a>
            </div>
            <button className='vvd' onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#connect';
              } else {
                document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}