import React from 'react';
import '../index.css';

const Internships = () => {
    return (
        <section className="services-section">
      <div className="services-content">
        <h2 className="section-title">Internship Opportunities</h2>
        <div className="services-grid">
          <div className="service-card">
            {/* <img
              className="w-100 h-36 md:w-96 md:h-48 lg:w-200 lg:h-64 items-center ml-14 mb-14 rounded-lg"
              src={javaImg}
              alt="Java Internship"
            /> */}
            <h3 className="service-title">Java Internship</h3>
            <p className="service-description">
              Gain experience in Java development and work on real-world projects.
            </p>
          </div>

          <div className="service-card">
            {/* <img
              className="w-100 h-36 md:w-96 md:h-48 lg:w-200 lg:h-64 items-center ml-14 mb-14 rounded-lg"
              src={javascriptImg}
              alt="JavaScript Internship"
            /> */}
            <h3 className="service-title">JavaScript Internship</h3>
            <p className="service-description">
              Enhance your skills in JavaScript and contribute to dynamic web applications.
            </p>
          </div>

          <div className="service-card">
            {/* <img
              className="w-100 h-36 md:w-96 md:h-48 lg:w-200 lg:h-64 items-center ml-14 mb-14 rounded-lg"
              src={webdevImg}
              alt="Web Development Internship"
            /> */}
            <h3 className="service-title">Web Development Internship</h3>
            <p className="service-description">
              Learn and develop responsive websites to boost your portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Internships;
