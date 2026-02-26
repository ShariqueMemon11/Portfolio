export const Certifications = () => {
    const certifications = [
        {
            title: "React - FreeCodeCamp",
            description: "Basic React concepts, hooks, and state management",
            year: "2025"
        },
        {
            title: "React Native - FreeCodeCamp",
            description: "React Native fundamentals, mobile app development",
            year: "2025"
        },
        {
            title: "JavaScript - FreeCodeCamp",
            description: "JavaScript fundamentals, DOM manipulation, and ES6 features",
            year: "2024"
        },
        {
            title: "Flutter - Udemy",
            description: "Flutter fundamentals, mobile app development",
            year: "2025"
        },
        {
            title: "AI Engineer Core Track",
            description: "LLM Engineering, RAG, OLLAMA, Agents",
            year: "2025"
        },
        {
            title: "Complete Generative AI Course",
            description: "With Langchain and Huggingface",
            year: "2025"
        }
    ];

    return (
        <section className="certifications" id="certifications">
            <div className="container">
                <h2>Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="cert-header">
                                <h3>{cert.title}</h3>
                                <span className="cert-year">{cert.year}</span>
                            </div>
                            <p className="cert-description">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
