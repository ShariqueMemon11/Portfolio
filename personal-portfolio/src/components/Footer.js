import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return(
        
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} className="text-center text-sm-center">
                     <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="LinkedIn"/></a>
                        <a href="#"><img src={navIcon2} alt="Facebook"/></a>
                        <a href="#"><img src={navIcon3} alt="Instagram"/></a>
                     </div>
                     <p className="contact-info-section" >© 2026 Shariq Memon. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}