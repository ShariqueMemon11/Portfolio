import { Container, Row, Col } from "react-bootstrap"
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
                        <a href="https://www.linkedin.com/in/shariq-memon-91438b24b/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                        <a href="https://github.com/ShariqueMemon11" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                        <a href="mailto:memonshariq10@gmail.com"><img src={navIcon3} alt="Email"/></a>
                     </div>
                     <p className="contact-info-section" >© 2026 Shariq Memon. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}