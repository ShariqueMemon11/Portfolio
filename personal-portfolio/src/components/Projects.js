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
        title: "KAPL Cultural Library",
        discription: "Production-ready React Native (TypeScript) mobile app with Nafath ID verification, multilingual RTL/LTR support, secure auth, and a CMS-driven content system across 10+ screens.",
        imgUrl: Medi_Care,
        details: {
            subtitle: "Cross-Platform Cultural Library Application",
            overview: "A production-ready, cross-platform mobile application built for a cultural library platform using React Native (TypeScript) and Firebase. The app covers the full range of a modern digital library experience — authentication, e-services, events, news, announcements, multimedia, and user profile management — across 10+ screens.",
            features: [
                {
                    title: "National ID Verification",
                    description: "Integrated Nafath, Saudi Arabia's national digital identity system, for secure user authentication."
                },
                {
                    title: "Multi-language Support",
                    description: "Full support for 7 languages (Arabic, English, French, Chinese, Korean, Portuguese, and Spanish), with dynamic RTL/LTR layout switching handled in real time based on the selected language."
                },
                {
                    title: "Dynamic, API-Driven Architecture",
                    description: "A CMS-driven page rendering system fetches and renders content from a backend API at runtime — the app's structure, navigation, and even theming (colors, branding) are server-controlled rather than hardcoded. A white-label-ready architecture that can be reconfigured without a new app release."
                },
                {
                    title: "Security-Conscious Session Handling",
                    description: "Used encrypted local storage (rather than plain storage) for tokens and session data, with automatic detection of expired sessions, state cleanup, and redirect-to-login with user notification."
                },
                {
                    title: "Real-Time Data Sync",
                    description: "All content and navigation dynamically driven via RESTful APIs, with real-time synchronization across app sections."
                },
                {
                    title: "Crash Monitoring",
                    description: "Integrated Firebase Crashlytics for stability monitoring in production."
                }
            ],
            tech: ["React Native", "TypeScript", "Firebase", "Firebase Crashlytics", "REST APIs", "Nafath"]
        }
        },
        {
        title: "Gold Trade Tracker",
        discription: "Full-stack React Native & Firebase app with 5+ core screens for multi-user accounts, automated currency conversion, real-time profit/loss calculations, and sale/purchase reporting.",
        imgUrl: finance_tracker,
        }
    ];
    const webprojects = [
        {
        title: "Alvora Admin Portal",
        discription: "Enterprise CMS platform built with React 19, TypeScript, Vite, and Material UI. Manages 15+ content modules with JWT auth, protected routing, paginated DataGrid, dynamic forms, image upload, rich-text editing, and Recharts analytics.",
        imgUrl: Executive_dashboard,
        details: {
            subtitle: "Internal CMS / Admin Dashboard",
            overview: "A full-featured internal admin portal built for managing all content on the Alvora company website — from projects and services to blog posts, job listings, certificates, and contact inquiries. Built as a single-page application serving as the one interface the team uses for all website content operations.",
            features: [
                {
                    title: "15+ Content Modules",
                    description: "Full CRUD operations across projects, services, sectors, team members, certificates, blogs, careers, FAQs, and newsletters, consuming a typed Supabase-backed data layer (PostgreSQL + file storage)."
                },
                {
                    title: "Authentication & Access Control",
                    description: "JWT-based authentication via Supabase Auth, implemented through a custom AuthProvider context, with protected and guarded routes (RequireAuth / RequireGuest) and a full forgot-password flow."
                },
                {
                    title: "Reusable Component System",
                    description: "Built a component library on top of Material UI, including a custom DataGrid wrapper with server-side pagination, a quick-filter toolbar, inline row editing, and a custom 'Show X entries' footer, plus reusable FormField, ImageUploadField, MultiImageUploadField, FormCard, and SearchableGridCard components."
                },
                {
                    title: "Smart File Storage Management",
                    description: "Images upload to Supabase Storage with UUID-based naming, and an orphan-cleanup system checks cross-table references before deleting any file to prevent accidental data loss."
                },
                {
                    title: "Performance-Optimized Routing",
                    description: "Code-split lazy routing using React.lazy + Suspense across 20+ routes, with nested layouts (an AppShell) and breadcrumb navigation."
                },
                {
                    title: "Polished Navigation UX",
                    description: "A collapsible sidebar with active-state highlighting, nested navigation groups (e.g., Projects, Careers), and responsive collapse to icon-only mode on smaller screens."
                },
                {
                    title: "Rich Content Tools",
                    description: "Integrated a rich-text editor (Jodit React) for blog and content editing, plus Recharts-powered analytics on the dashboard."
                },
                {
                    title: "Data Bootstrapping",
                    description: "Wrote Node.js seed scripts to bootstrap Supabase tables with initial data across services, projects, team, FAQs, sectors, and newsletters."
                }
            ],
            tech: ["React 19", "TypeScript", "Vite", "Material UI v9", "Supabase", "Formik + Yup", "Recharts", "Jodit React"],
            modules: "Dashboard, About Us, Projects, Project Ranges, Certificates, Blog, Jobs/Careers, Job Applications, Contact Inquiries, Newsletters, FAQs, Policies, Services, Sectors, Team, Social Links, Footer Info."
        }
        },
        {
        title: "Decentralized Task Management",
        discription: "Web3 blockchain-integrated task management app using React.js, Solidity, and Ethereum. Smart contract handles 5+ functions for tamper-proof task tracking on the Ethereum network.",
        imgUrl: Dapp,
        },
    ]

    const Aiprojects = [
        {
        title: "QA Bot — RAG System",
        discription: "AI-powered QA bot built using Python, RAG architecture, and LLM integration for intelligent document-based question answering.",
        imgUrl: QA_Bot,
        },
        {
        title: "Trading Bot",
        discription: "Automated trading assistant with AI API integration, real-time data processing, and Python-based analytics for market insights.",
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