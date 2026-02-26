export const Education = () => {
    const education = {
        university: "Capital University of Science & Technology",
        degree: "Bachelor of Science in Computer Science",
        duration: "2022 - 2026",
        coursework: [
            "Data Structures & Algorithms",
            "Database Systems",
            "Software Engineering",
            "Object Oriented Analysis & Design",
            "Artificial Intelligence",
            "Human-Computer Interaction"
        ]
    };

    return (
        <section className="education" id="education">
            <div className="container">
                <h2>Education</h2>
                <div className="education-card">
                    <div className="education-header">
                        <div>
                            <h3>{education.university}</h3>
                            <p className="degree">{education.degree}</p>
                        </div>
                        <span className="duration">{education.duration}</span>
                    </div>
                    <div className="coursework-section">
                        <h4>Relevant Coursework</h4>
                        <div className="coursework-list">
                            {education.coursework.map((course, index) => (
                                <span key={index} className="course-badge">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
