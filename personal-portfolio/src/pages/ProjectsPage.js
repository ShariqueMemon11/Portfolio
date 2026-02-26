import { useState } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import trading_bot from "../assets/img/trading_bot.png"
import Dapp from "../assets/img/Dapp.png"
import QA_Bot from "../assets/img/QA_Bot.png"
import Executive_dashboard from "../assets/img/Executive_dashboard.png"
import finance_tracker from "../assets/img/finance_tracker.png"
import Medi_Care from "../assets/img/Medi_Care.png"
// Virtual School Images
import VS_Login from "../assets/img/VirtualSchool/Login.PNG"
import VS_Register from "../assets/img/VirtualSchool/Register.PNG"
import VS_Dashboard from "../assets/img/VirtualSchool/Dashboard.PNG"
import VS_Dashboard2 from "../assets/img/VirtualSchool/Dashboard2.PNG"
import VS_Dashboard3 from "../assets/img/VirtualSchool/Dashboard3.PNG"
import VS_ClassManagement from "../assets/img/VirtualSchool/Classmanagement.PNG"
import VS_StudentAssign from "../assets/img/VirtualSchool/Studentassign.PNG"
import VS_TeacherApp from "../assets/img/VirtualSchool/Teacherapplication.PNG"
import VS_Notification from "../assets/img/VirtualSchool/notification.PNG"

export const ProjectsPage = () => {
    // App Projects
    const appProjects = [
        {
            name: "Finance Tracker",
            description: [
                "Cross-platform mobile application for personal finance management.",
                "Track expenses, income, and manage budgets efficiently.",
                "Real-time synchronization across devices with secure data storage."
            ],
            keyFeatures: ["Expense Tracking", "Budget Management", "Financial Reports", "Multi-currency Support"],
            technology: [
                { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ],
            screenshot: [finance_tracker],
            demoLink: "",
            githubLink: "https://github.com"
        },
        {
            name: "Medi Care",
            description: [
                "Healthcare mobile application for appointment booking and medical records.",
                "Connect patients with healthcare providers seamlessly.",
                "Secure storage of medical history and prescriptions."
            ],
            keyFeatures: ["Appointment Booking", "Medical Records", "Doctor Search", "Prescription Management"],
            technology: [
                { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ],
            screenshot: [Medi_Care],
            demoLink: "",
            githubLink: "https://github.com"
        }
    ];

    // Web Projects
    const webProjects = [
        {
            name: "Virtual School",
            description: [
                "Built with Flutter for the frontend and Firebase for the backend.",
                "Allows teachers, students, and administrators to manage courses, assignments, and communication in a virtual environment.",
                "Features include user authentication, course management, virtual classrooms, and more."
            ],
            keyFeatures: ["Course Management", "Virtual Classroom", "User Roles", "Classroom Management"],
            technology: [
                { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
            ],
            screenshot: [
                VS_Login,
                VS_Register,
                VS_Dashboard,
                VS_Dashboard2,
                VS_Dashboard3,
                VS_ClassManagement,
                VS_StudentAssign,
                VS_TeacherApp,
                VS_Notification
            ],
            demoLink: "",
            githubLink: "https://github.com/ShariqueMemon11/Virtual-Pre-School-DEMO"
        },
        {
            name: "Decentralized Application (DApp)",
            description: [
                "Blockchain-based decentralized application built on Ethereum.",
                "Smart contract integration for secure and transparent transactions.",
                "Web3 wallet connectivity for seamless user experience."
            ],
            keyFeatures: ["Smart Contracts", "Web3 Integration", "Cryptocurrency Transactions", "Decentralized Storage"],
            technology: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
                { name: "Ethereum", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" }
            ],
            screenshot: [Dapp],
            demoLink: "",
            githubLink: "https://github.com"
        },
        {
            name: "Executive Dashboard",
            description: [
                "Comprehensive business analytics dashboard for executives.",
                "Real-time data visualization with interactive charts and graphs.",
                "KPI tracking and performance monitoring across departments."
            ],
            keyFeatures: ["Real-time Analytics", "Data Visualization", "KPI Tracking", "Custom Reports"],
            technology: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ],
            screenshot: [Executive_dashboard],
            demoLink: "",
            githubLink: "https://github.com"
        }
    ];

    // AI Projects
    const aiProjects = [
        {
            name: "Q&A Bot",
            description: [
                "Intelligent question-answering bot powered by natural language processing.",
                "Context-aware responses with machine learning algorithms.",
                "Continuous learning from user interactions for improved accuracy."
            ],
            keyFeatures: ["Natural Language Processing", "Context Understanding", "Machine Learning", "Multi-language Support"],
            technology: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
            ],
            screenshot: [QA_Bot],
            demoLink: "",
            githubLink: "https://github.com"
        },
        {
            name: "Trading Bot",
            description: [
                "Automated cryptocurrency trading bot with AI-powered strategies.",
                "Real-time market analysis and predictive algorithms.",
                "Risk management and portfolio optimization features."
            ],
            keyFeatures: ["Automated Trading", "Market Analysis", "Risk Management", "Portfolio Optimization"],
            technology: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
            ],
            screenshot: [trading_bot],
            demoLink: "",
            githubLink: "https://github.com"
        }
    ];

    return (
        <div className="projects-page">
            <NavBar />
            <section className="projects-section">
                <Container>
                    <div className="projects-header">
                        <h1>Projects</h1>
                        <p>I live for pushing boundaries, experimenting with new tech, and turning wild ideas into reality. Currently, I'm deep into building Cross-Platform Mobile Apps because why settle for one platform when you can own them all? Let's code, create, and make some digital magic together! 💻🔥</p>
                    </div>

                    <Tab.Container defaultActiveKey="app">
                        <Nav variant="pills" className="projects-nav">
                            <Nav.Item>
                                <Nav.Link eventKey="app">App</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="web">Web</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ai">AI</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content className="projects-content">
                            <Tab.Pane eventKey="app">
                                {appProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </Tab.Pane>
                            <Tab.Pane eventKey="web">
                                {webProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </Tab.Pane>
                            <Tab.Pane eventKey="ai">
                                {aiProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

const ProjectCard = ({ name, description, keyFeatures, technology, screenshot, demoLink, githubLink }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((prev) => (prev === screenshot.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentImage((prev) => (prev === 0 ? screenshot.length - 1 : prev - 1));
    };

    return (
        <div className="project-card-detailed">
            {/* Header */}
            <div className="project-card-header">
                <div className="project-title-section">
                    <h2>{name}</h2>
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                            <i className="bi bi-github"></i>
                        </a>
                    )}
                </div>
                {demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-btn">
                        Live Demo
                    </a>
                )}
            </div>

            {/* Screenshot Carousel */}
            <div className="project-carousel">
                <div className="carousel-container">
                    <img src={screenshot[currentImage]} alt={`${name} screenshot`} />
                    {screenshot.length > 1 && (
                        <>
                            <button onClick={prevSlide} className="carousel-btn prev-btn">
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button onClick={nextSlide} className="carousel-btn next-btn">
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </>
                    )}
                </div>
                {screenshot.length > 1 && (
                    <div className="carousel-dots">
                        {screenshot.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`dot ${currentImage === index ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Description */}
            <div className="project-section">
                <h3>Description</h3>
                <div className="description-list">
                    {description.map((desc, index) => (
                        <div key={index} className="description-item">
                            <i className="bi bi-star-fill"></i>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Features */}
            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-list">
                    {keyFeatures.map((feature, index) => (
                        <span key={index} className="feature-badge">
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Technologies */}
            <div className="project-section">
                <h3>Technologies</h3>
                <div className="tech-list">
                    {technology.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <img src={tech.icon} alt={tech.name} />
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
