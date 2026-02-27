import { useEffect , useState } from "react"
import { Container, Row , Col} from "react-bootstrap"
import {ArrowRightCircle} from'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Banner = () => {

    const [LoopNum , setLoopNum] = useState(0);
    const [IsDeleting , setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Mobile App Developer", "Frontend Developer", "Ui/Ux Designer", "Ai/Ml engineer", "Backend Developer", "Game Developer"];
    const [text , settext] = useState('');
    const period=1700;
    const [delta , setdelta] = useState(350 - Math.random() * 100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)
     return() => { clearInterval(ticker)};
    }, [text, delta])

    const tick = () => {
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatetext = IsDeleting ? fullText.substring(0 , text.length -1) : fullText.substring(0, text.length+1);

        settext(updatetext);

        if(IsDeleting) {
            setdelta(prevdelta => prevdelta / 1.5)
        }

        if(!IsDeleting && updatetext === fullText) {
            setIsDeleting(true);
            setdelta(period);
        } else if(IsDeleting && updatetext === ''){
            setIsDeleting(false);
            setLoopNum(LoopNum + 1);
            setdelta(500);
        }
    
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="banner-text-col">
                      <TrackVisibility>
                      {({isVisible}) =>
                      <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>{`Hi I'm Shariq `}<br/><span className="wrap">{text}</span></h1>
                      <p>From dynamic frontends in React to scalable backends with Node.js and MongoDB, I build real-time, user-focused applications where performance meets polished UI/UX.</p>
                      <a href="/resume.pdf" download="Shariq_Resume.pdf" className="resume-btn">
                        <button>Resume <ArrowRightCircle size={25} /></button>
                      </a>
                      </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="banner-img-col">
                      <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}