import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, discription, imgUrl, details }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{discription}</span>
                        {details && (
                            <button
                                className="proj-details-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowModal(true);
                                }}
                            >
                                View Details
                            </button>
                        )}
                    </div>
                </div>
            </Col>

            {details && showModal && (
                <ProjectModal
                    title={title}
                    details={details}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
};

const ProjectModal = ({ title, details, onClose }) => {
    // Close on backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="proj-modal-backdrop" onClick={handleBackdropClick}>
            <div className="proj-modal">
                {/* Header */}
                <div className="proj-modal-header">
                    <div>
                        <h3 className="proj-modal-title">{title}</h3>
                        <span className="proj-modal-subtitle">{details.subtitle}</span>
                    </div>
                    <button className="proj-modal-close" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="proj-modal-body">
                    {/* Overview */}
                    <p className="proj-modal-overview">{details.overview}</p>

                    {/* Key Features */}
                    <div className="proj-modal-section">
                        <h4>Key Features</h4>
                        <ul className="proj-modal-features">
                            {details.features.map((f, i) => (
                                <li key={i}>
                                    <span className="proj-modal-feature-title">{f.title}</span>
                                    {f.description && (
                                        <span className="proj-modal-feature-desc"> — {f.description}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="proj-modal-section">
                        <h4>Tech Stack</h4>
                        <div className="proj-modal-tech">
                            {details.tech.map((t, i) => (
                                <span key={i} className="proj-modal-tech-badge">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* Modules (optional) */}
                    {details.modules && (
                        <div className="proj-modal-section">
                            <h4>Modules</h4>
                            <p className="proj-modal-modules">{details.modules}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
