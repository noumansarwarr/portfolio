import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              I'm a backend-focused full stack developer who's spent 5+ years 
              building systems that companies depend on.
            </p>
            
            <p>
              My work lives in production. I've built payment systems that process 
              millions, APIs that serve thousands of concurrent users, and admin 
              panels that operations teams use every day. When something breaks at 
              2 AM, I'm the one who gets called.
            </p>
            
            <p>
              I specialize in Laravel and PHP because I know them deeply - not just 
              the happy path, but the edge cases, the performance gotchas, and the 
              debugging techniques that save hours. I pair that with React or Vue 
              on the frontend, and I'm comfortable all the way down to the server 
              and database level.
            </p>
            
            <p>
              Beyond code, I lead teams. I've mentored junior developers, run code 
              reviews that catch bugs before production, and made architecture 
              decisions that teams live with for years. I communicate clearly, 
              estimate honestly, and deliver what I promise.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">⚡</span>
              <h3>Production-First</h3>
              <p>I build for real traffic, real users, and real edge cases. Not demos.</p>
            </div>
            
            <div className="highlight-card">
              <span className="highlight-icon">🔧</span>
              <h3>Full Ownership</h3>
              <p>I deploy and maintain what I build. No throwing code over the wall.</p>
            </div>
            
            <div className="highlight-card">
              <span className="highlight-icon">💬</span>
              <h3>Clear Communication</h3>
              <p>I explain technical decisions in business terms. No jargon walls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
