import React from 'react';
import { socialLinks, contactCTA } from '../data/links';
import './Contact.css';

const linkIcons = {
  upwork: '💼',
  linkedin: '🔗',
  github: '💻',
  email: '✉️'
};

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h3>{contactCTA.headline}</h3>
            <p className="contact-subtext">{contactCTA.subtext}</p>
            <div className="contact-availability">
              <span className="availability-dot"></span>
              {contactCTA.availability}
            </div>
          </div>

          <div className="contact-links">
            {Object.entries(socialLinks).map(([key, link]) => (
              <a
                key={key}
                href={link.url}
                className="contact-link"
                target={key !== 'email' ? '_blank' : undefined}
                rel={key !== 'email' ? 'noopener noreferrer' : undefined}
              >
                <span className="link-icon">{linkIcons[key]}</span>
                <div className="link-content">
                  <span className="link-label">{link.label}</span>
                  <span className="link-description">{link.description}</span>
                </div>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
