import { Container, Row, Col } from "react-bootstrap";

export const Experience = () => {
    const experiences = [
        {
            company: "Fidsor Pvt. Limited",
            title: "React Native Developer Intern",
            duration: "July 2025 - Sep 2025",
            points: [
                "Built and deployed mobile applications using React Native and Firebase.",
                "Integrated real-time database synchronization with Firebase Firestore.",
                "Designed reusable UI components to improve scalability and maintainability.",
                "Optimized application performance and reduced loading time."
            ],
            icons: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
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
