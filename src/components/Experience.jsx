import React from 'react';
import { experience, education } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience & Leadership</h2>
        <p className="section-subtitle">{experience.summary}</p>

        <div className="experience-grid">
          <div className="experience-leadership">
            <h3 className="experience-heading">What I Do Beyond Code</h3>
            <div className="leadership-cards">
              {experience.leadership.map((item, index) => (
                <div key={index} className="leadership-card">
                  <h4>{item.title}</h4>
                  <p className="leadership-desc">{item.description}</p>
                  <ul className="leadership-examples">
                    {item.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-timeline">
            <h3 className="experience-heading">Career Timeline</h3>
            <div className="timeline">
              {experience.timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-role">{item.role}</h4>
                    <span className="timeline-type">{item.type}</span>
                    <ul className="timeline-highlights">
                      {item.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="education">
              <h3 className="experience-heading">Education</h3>
              <div className="education-card">
                <h4>{education.degree}</h4>
                <p className="education-institution">
                  {education.institution} • {education.year}
                </p>
                <p className="education-note">{education.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
