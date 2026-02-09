import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from '../assets/img/contact-img.svg'
import Whatsapp from '../assets/img/WhatsApp-Logo.wine.png'
import Gmail from '../assets/img/Gmail-Logo.wine.png'

export const Contact = () => {
    const formInitialDetails = {
        Name: '',
        email:'',
        phone:'',
        Message:'',
    }
    const [formDetails , setformDetalis] = useState(formInitialDetails)
    const [buttonText , setButtonText ] = useState('send')
    const [status , setStatus] = useState({})

    const onFormUpdate =(category , value) => {
        setformDetalis({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit= async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        let response = await fetch ('http://localhost:5000/contact', {
            method: 'Post',
            headers:{
                'Content-Type': "Application/json;charset=utf-8"
            },
            body:JSON.stringify(formDetails)
        });
        setButtonText('send')
        let result=response.json();
        setformDetalis(formInitialDetails);
        if (result.code === 200){
            setStatus({success:true, message:"Message sent successfully"})
        } else {
            setStatus({success:false, message:"Something went wrong, please try again later"})
        }
    };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="allign-items-center">
                    <Col md={6}>
                     <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md='6'>
                     <h2>Get In Touch</h2>
                     <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm='6' className="px-1">
                             <input type="text" value={formDetails.Name} placeholder="Name" onChange={(e) => onFormUpdate('Name', e.target.value)}/>
                            </Col>
                            <Col sm='6' className="px-1">
                             <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('Name', e.target.value)}/>
                            </Col>
                            <Col sm='6' className="px-1">
                             <input type="tel" value={formDetails.phone} placeholder="Phone No" onChange={(e) => onFormUpdate('Name', e.target.value)}/>
                            </Col>
                            <Col>
                             <textarea rows='6' value={formDetails.Message} placeholder="Message.." onChange={(e) => onFormUpdate('Message', e.target.value)}/>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                     </form>
                     
                     <div className="contact-info-section">
                        <h3>Feel free to reach out to me for any questions or opportunities!</h3>
                        <Col className="contact-methods">
                            <Col md={6} className="contact-method">
                                <div className="contact-card">
                                    <div className="contact-icon">
                                        <img src={Whatsapp} alt="WhatsApp"/>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Whatsapp</h4>
                                        <a href="https://wa.me/923163082532" target="_blank" rel="noopener noreferrer">
                                            +92 316 3082532
                                        </a>
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col md={6} className="contact-method">
                                <div className="contact-card">
                                    <div className="contact-icon">
                                        <img src={Gmail} alt="Gmail"/>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Email</h4>
                                        <a href="mailto:memonshariq10@gmail.com">
                                            memonshariq10@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}