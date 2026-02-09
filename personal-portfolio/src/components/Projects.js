import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import trading_bot from "../assets/img/trading_bot.png"
import Dapp from "../assets/img/Dapp.png"
import QA_Bot from "../assets/img/QA_Bot.png"
import Executive_dashboard from "../assets/img/Executive_dashboard.png"
import finance_tracker from "../assets/img/finance_tracker.png"
import Medi_Care from "../assets/img/Medi_Care.png"
export const Projects = () => {
    
    const Appprojects = [
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: finance_tracker,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: Medi_Care,
        }
    ];
    const webprojects = [
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: Dapp,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: Executive_dashboard,
        },
    ]

    const Aiprojects = [
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: QA_Bot,
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: trading_bot,
        },
    ]
    return(
        <section className="project" id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I live for pushing boundaries, experimenting with new tech, and turning wild ideas into reality. Currently, I'm deep into building Cross-Platform Mobile Apps because why settle for one platform when you can own them all? Let's code, create, and make some digital magic together! 💻🔥</p>
                        <Tab.Container id="project-tabs" defaultActiveKey='first'>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content align -item-center" id='pills-tab'> 
                            <Nav.Item>
                                <Nav.Link eventKey="first">App</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Web</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Ai</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        Appprojects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <Row>
                                    {
                                        webprojects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <Row>
                                    {
                                        Aiprojects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                 key={index}
                                                 {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>

        </section>
    );
}