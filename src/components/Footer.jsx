import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">
            © {currentYear} Nouman Sarwar.
          </p>
          <p className="footer-tagline">
            Backend systems that don't break at 3 AM.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
