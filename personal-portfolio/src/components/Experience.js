import { Container, Row, Col } from "react-bootstrap";

export const Experience = () => {
    const experiences = [
        {
            company: "Fidsor.net",
            title: "React Native Developer",
            duration: "Feb 2026 – Aug 2026",
            points: [
                "Developed and maintained production-ready cross-platform mobile applications using React Native, TypeScript, Firebase, and REST APIs, implementing 10+ core features including secure authentication and real-time data synchronization.",
                "Contributed to the KAPL Cultural Library mobile app, implementing Nafath national ID verification, multilingual RTL/LTR support, encrypted session management, and role-based access control.",
                "Built the Alvora Admin Portal (React 19, TypeScript, Vite, Material UI) for managing 15+ CMS modules including projects, blogs, careers, certificates, and inquiries.",
                "Designed reusable UI components — dynamic forms, a server-side paginated DataGrid, file upload modules, and protected authentication flows — reducing feature development time by approximately 30%.",
                "Integrated Supabase-backed APIs and collaborated closely with backend engineers to ship scalable, secure, maintainable features, including barcode scanning and image upload utilities."
            ],
            icons: [
                { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
                { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" }
            ]
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2>Experience</h2>
                        <p>My professional journey and key accomplishments</p>
                        <div className="experience-container">
                            {experiences.map((exp, index) => (
                                <ExperienceCard key={index} {...exp} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const ExperienceCard = ({ company, title, duration, points, icons }) => {
    return (
        <div className="experience-card">
            {/* Header */}
            <div className="experience-header">
                <div className="experience-title-section">
                    <h3>{company}</h3>
                    <p className="experience-role">{title}</p>
                </div>
                <p className="experience-duration">{duration}</p>
            </div>

            {/* Tech Icons */}
            <div className="experience-icons">
                {icons.map((tech, index) => (
                    <div key={index} className="experience-tech-icon" title={tech.name}>
                        <img src={tech.icon} alt={tech.name} />
                    </div>
                ))}
            </div>

            {/* Bullet Points */}
            <ul className="experience-points">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};
