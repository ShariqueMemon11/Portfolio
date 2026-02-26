import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

export const Testimonials = () => {
    const testimonials = [
        {
            text: "Communication was smooth, everything was clear and well-organized. It's clear that he has experience and takes his work seriously.",
            name: "Ali Ahmed",
            role: "Project Manager, Ideagist"
        },
        {
            text: "Shariq delivered exceptional work on our mobile app. His attention to detail and problem-solving skills are outstanding. Highly recommended!",
            name: "Sarah Johnson",
            role: "CEO, Tech Innovations"
        },
        {
            text: "Working with Shariq was a great experience. He understood our requirements perfectly and delivered beyond expectations.",
            name: "Michael Chen",
            role: "Product Lead, StartupHub"
        }
    ];

    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
            setFade(true);
        }, 200);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
            setFade(true);
        }, 200);
    };

    return (
        <section className="testimonials" id="testimonials">
            <Container>
                <div className="testimonials-wrapper">
                    {/* Quote Icon */}
                    <div className="quote-icon">
                        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                            <path d="M20 50C20 38.954 28.954 30 40 30V40C34.477 40 30 44.477 30 50H40V70H20V50Z" fill="currentColor" opacity="0.2"/>
                            <path d="M60 50C60 38.954 68.954 30 80 30V40C74.477 40 70 44.477 70 50H80V70H60V50Z" fill="currentColor" opacity="0.2"/>
                        </svg>
                    </div>

                    {/* Title */}
                    <h2>Testimonials</h2>
                    <p className="testimonials-subtitle">What people say about working with me</p>

                    {/* Testimonial Content */}
                    <div className="testimonial-content">
                        <div className={`testimonial-text ${fade ? 'fade-in' : 'fade-out'}`}>
                            <p><span className="quote-mark">"</span>{testimonials[current].text}<span className="quote-mark">"</span></p>
                        </div>

                        <div className="testimonial-author">
                            <h4>— {testimonials[current].name}</h4>
                            <p>{testimonials[current].role}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="testimonial-navigation">
                        <button onClick={handlePrev} className="nav-btn">
                            ←
                        </button>
                        
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`dot ${index === current ? 'active' : ''}`}
                                />
                            ))}
                        </div>

                        <button onClick={handleNext} className="nav-btn">
                            →
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
