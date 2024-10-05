import React from 'react';



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Account</a>
          <a href="#">Media Center</a>
        </div>
        <div className="footer-column">
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className="footer-column">
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
        </div>
        <div className="footer-column">
          <a href="#">Contact Us</a>
          <a href="#">Speed Test</a>
          <a href="#">Legal Notices</a>
        </div>
      </div>
      <div className="footer-info">
        <p>Netflix India</p>
        <p>© 2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
