import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-custom text-center py-4">
    <Container>
      <p className="mb-2">&copy; {new Date().getFullYear()} Apichet Janya</p>
      <div className="social-icons">
        <a
          href="https://github.com/jackkyboy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://stackoverflow.com/users/17708645/apichet-janya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stack Overflow"
        >
          <FaStackOverflow size={24} />
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
