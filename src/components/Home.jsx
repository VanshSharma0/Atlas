import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <div  
                    className="hero-content">
                    <h1 className="hero-title">Take Your Career to the Next Level with CodSoft</h1>
                    <p className="hero-description">
                        We specialize in creating stunning websites and powerful applications tailored to your needs.
                    </p>
                    <Link to="/services" className="btn-primary">Explore Our Services</Link>
                </div>
            </header>

            <section className="services-section">
                <div className="services-content">
                    <h2 className="section-title">Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <img src="/path/to/web-development-icon.png" alt="Web Development" className="service-icon" />
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-description">
                                We create responsive and user-friendly websites that elevate your brand.
                            </p>
                        </div>
                        <div className="service-card">
                            <img src="/path/to/app-development-icon.png" alt="Application Development" className="service-icon" />
                            <h3 className="service-title">Application Development</h3>
                            <p className="service-description">
                                Transform your ideas into robust mobile and web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="about-content">
                    <h2 className="section-title">About Us</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ex id nulla consequat suscipit.
                    </p>
                    <Link to="/about" className="btn-secondary">Learn More</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
