import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for new projects
          </div>
          
          <h1 className="hero-title">
            I build backend systems that{' '}
            <span className="hero-title-accent">don't break at 3 AM</span>
          </h1>
          
          <p className="hero-subtitle">
            Lead Full Stack Developer with 5+ years shipping production code. 
            I help startups and businesses build scalable APIs, payment systems, 
            and SaaS platforms that handle real traffic and real money.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Hire Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">5+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">50+</span>
              <span className="hero-stat-label">Projects Shipped</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">$2M+</span>
              <span className="hero-stat-label">Processed Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
