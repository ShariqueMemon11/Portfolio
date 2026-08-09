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
import Kapl from "../assets/img/KAPL_App_Collage.png"
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
            name: "KAPL Cultural Library",
            description: [
                "A production-ready, cross-platform mobile application built for a cultural library platform using React Native (TypeScript) and Firebase.",
                "Covers the full range of a modern digital library experience — authentication, e-services, events, news, announcements, multimedia, and user profile management — across 10+ screens.",
                "White-label-ready architecture: app structure, navigation, and theming are server-controlled via a CMS-driven API, meaning the app can be reconfigured without a new release."
            ],
            keyFeatures: [
                "Nafath National ID Verification",
                "7-Language RTL/LTR Support",
                "Dynamic CMS-Driven Rendering",
                "Encrypted Session Storage",
                "Real-Time API Sync",
                "Firebase Crashlytics"
            ],
            technology: [
                { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
            ],
            screenshot: [Kapl],
            demoLink: "",
            githubLink: ""
        },
        {
            name: "Gold Trade Tracker",
            description: [
                "Full-stack mobile app for gold trading management using React Native and Firebase.",
                "Implements 5+ core screens for multi-user accounts with real-time profit/loss calculations.",
                "Automated currency conversion and detailed sale/purchase reporting."
            ],
            keyFeatures: ["Multi-user Accounts", "Currency Conversion", "Profit/Loss Calculator", "Sale & Purchase Reports"],
            technology: [
                { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
            ],
            screenshot: [finance_tracker],
            demoLink: "",
            githubLink: ""
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
            name: "Alvora Admin Portal",
            description: [
                "A full-featured internal admin portal built for managing all content on the Alvora company website — from projects and services to blog posts, job listings, certificates, and contact inquiries.",
                "Built as a single-page application consuming a typed Supabase-backed data layer, with JWT-based authentication, protected/guarded routing, and a reusable component library.",
                "Code-split lazy routing across 20+ routes with a collapsible sidebar, breadcrumb navigation, rich-text editing (Jodit React), and Recharts-powered dashboard analytics."
            ],
            keyFeatures: [
                "15+ CMS Content Modules",
                "JWT Auth & Protected Routes",
                "Server-Side Paginated DataGrid",
                "Smart File Storage & Orphan Cleanup",
                "Lazy Routing with React.lazy + Suspense",
                "Rich Text Editor (Jodit React)",
                "Recharts Analytics Dashboard",
                "Node.js Seed Scripts"
            ],
            technology: [
                { name: "React 19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
                { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
                { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
            ],
            screenshot: [Executive_dashboard],
            demoLink: "",
            githubLink: "",
            modules: "Dashboard, About Us, Projects, Project Ranges, Certificates, Blog, Jobs/Careers, Job Applications, Contact Inquiries, Newsletters, FAQs, Policies, Services, Sectors, Team, Social Links, Footer Info."
        },
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
            name: "Decentralized Task Management",
            description: [
                "Web3 blockchain-integrated task management app built with React.js, Solidity, and Ethereum.",
                "Smart contract handles 5+ functions for tamper-proof, on-chain task tracking.",
                "Web3 wallet connectivity for seamless user interaction with the Ethereum network."
            ],
            keyFeatures: ["Smart Contracts", "Web3 Integration", "On-Chain Task Tracking", "Wallet Connectivity"],
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
            name: "QA Bot — RAG System",
            description: [
                "AI-powered question-answering bot built using Python and a RAG (Retrieval-Augmented Generation) architecture.",
                "Integrates LLM APIs for intelligent, context-aware responses grounded in document content.",
                "Designed for accurate, source-aware answers rather than hallucinated responses."
            ],
            keyFeatures: ["RAG Architecture", "LLM Integration", "Document-Based QA", "Context-Aware Responses"],
            technology: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
            ],
            screenshot: [QA_Bot],
            demoLink: "",
            githubLink: ""
        },
        {
            name: "Trading Bot",
            description: [
                "Automated trading assistant with AI API integration and real-time data processing.",
                "Python-based analytics for market insights and signal generation.",
                "Modular architecture supporting multiple trading strategies."
            ],
            keyFeatures: ["AI API Integration", "Real-Time Data Processing", "Market Analytics", "Automated Signals"],
            technology: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
            ],
            screenshot: [trading_bot],
            demoLink: "",
            githubLink: ""
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

const ProjectCard = ({ name, description, keyFeatures, technology, screenshot, demoLink, githubLink, modules }) => {
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

            {/* Modules (optional) */}
            {modules && (
                <div className="project-section">
                    <h3>Modules</h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                        {modules}
                    </p>
                </div>
            )}
        </div>
    );
};
