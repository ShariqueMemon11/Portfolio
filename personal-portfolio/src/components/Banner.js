import { useEffect , useState } from "react"
import { Container, Row , Col} from "react-bootstrap"
import {ArrowRightCircle} from'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Banner = () => {

    const [LoopNum , setLoopNum] = useState(0);
    const [IsDeleting , setIsDeleting] = useState(false);
    const toRotate = ["Web Developer" , "Mobile App Developer" , 'Frontend Developer' ,"Ui/Ux Designer , Ai Developer , Backend Developer"];
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
                    <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                      {({isVisible}) =>
                      <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>{`Hi I'm Shariq `}<br/><span className="wrap">{text}</span></h1>
                      <p>Hey there! I'm a CS student on a mission 🚀—constantly coding, vibing, and crushing tech challenges. I live for pushing boundaries, experimenting with new tech, and turning wild ideas into reality. Currently, I'm deep into building Cross-Platform Mobile Apps because why settle for one platform when you can own them all? Let's code, create, and make some digital magic together! 💻🔥 </p>
                      <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                      </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}