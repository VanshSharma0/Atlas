import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import web from "../assets/Web.jpg";
import app from "../assets/App.jpg"
// import {Image} from

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Take Your Career to the Next Level with CodSoft
          </h1>
          <p className="hero-description">
            Join our exciting internship journey!
          </p>
          <Link to="/Internships" className="btn-primary">
            Explore Our Internships
          </Link>
        </div>
      </header>

      <div> 
        <h1 className="text-4xl m-[50px]"></h1>
      </div>

      <section className="services-section">
        <div className="services-content">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img
                className="w-100 h-36 md:w-96 md:h-48 lg:w-200 lg:h-64 items-center ml-14 mb-14 rounded-lg"
                src={web}
                alt="Web Development"
              />
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                We create responsive and user-friendly websites that elevate
                your brand.
              </p>
            </div>

            <div className="service-card">
              <img
                className="w-100 h-36 md:w-96 md:h-48 lg:w-200 lg:h-64 items-center ml-14 mb-14 rounded-lg"
                src={app}
              />
              <h3 className="service-title">Application Development</h3>
              <p className="service-description">
                Transform your ideas into robust mobile and web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div> 
        <h1 className="text-4xl m-[50px]"></h1>
      </div>

      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-description">
          Welcome to Atlas of code, your one-stop destination for all things related to application and web development. We are a dynamic team of dedicated professionals committed to transforming your digital ideas into reality. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and elevate brands to new heights.


          </p>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <div> 
        <h1 className="text-4xl m-[50px]"></h1>
      </div>

      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">Internship Opportunities</h2>
          <p className="internship-description">
            We offer various internship opportunities in different fields. Click below to learn more.
          </p>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
