import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import "./About.css";
import WorkExperience from "./WorkExperience"; // 👉 เพิ่มบรรทัดนี้
import ResearchPublications from "./ResearchPublications"; 

const About = () => (
  <section id="about" className="about-section py-5">
    <div className="terminal-intro text-start">
      <pre>
        <code>
{`> booting portfolio...
> loading Apichet's credentials...
> system online ✓
> type "skills" or "projects" to begin`}
        </code>
      </pre>
    </div>

    <Container className="text-center mb-5">
      <Image
        src="/profile.jpg"
        alt="Profile of Apichet Janya"
        roundedCircle
        fluid
        style={{ maxWidth: "160px", boxShadow: "0 0 12px rgba(0,0,0,0.15)" }}
      />
    </Container>

    <Container>
      <header className="mb-5 text-center">
        <h2 className="mb-3">About Me</h2>
        <p className="lead about-lead">
          Hello! I'm <strong>Apichet</strong> — a risk-driven problem solver passionate about transforming traditional insurance operations with modern technology.
          <br />
          Whether coordinating port risk mitigation or building a self-service car insurance platform, I thrive where business meets data and logic meets real-world complexity.
        </p>
      </header>

      <section className="mb-5">
        <h4 className="mb-3">💼 Work Experience & Systems I Build</h4>
        <WorkExperience />
      </section>

      <section className="mb-5">
        <h4 className="mb-3">📡 Research & Publications</h4>
        <ResearchPublications />
      </section>


      <section className="mb-5">
        <h4 className="mb-3">🧠 Technical & Analytical Skills</h4>
        <ListGroup horizontal className="flex-wrap skills-list">
          {[
            "Python", "JavaScript", "PHP", "React", "Flask", "SQL", "BigQuery",
            "Power BI", "AppSheet", "Tableau", "HTML", "CSS", "WordPress",
            "2C2P Gateway", "RESTful API", "Wireshark", "JWT", "Cloudflare",
            "Google Sheets", "MS Office 365"
          ].map((skill, idx) => (
            <ListGroup.Item key={idx} className="me-2 mb-2">
              {skill}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </section>

      <section className="mb-5 education-section">
        <h4 className="mb-2">🎓 Education</h4>
        <p className="mb-0">
          <strong>Ramkhamhaeng University</strong><br />
          Bachelor of Arts in Mass Communication (2007 – 2011)
        </p>
      </section>

      <section className="mb-5">
        <h4 className="mb-3">📂 Proof of Capability</h4>
        <Row className="mb-4">
          <Col md={6}>
            <h6>🧠 Key Contributions</h6>
            <ul>
              <li>Built secure upload system for insurance documents with token auth</li>
              <li>Integrated 2C2P payments with base64 cert parsing in Flask backend</li>
              <li>Designed BQ → Flask → React flow for dynamic price calculation</li>
              <li>Developed containerized app using Dockerfile + docker-compose</li>
              <li>Modularized Axios API calls and refactored data fetching utils</li>
            </ul>
          </Col>
          <Col md={6}>
            <h6>📁 Project Structure Highlights</h6>
            <ul>
              <li><code>/backend</code> – Flask API: auth, pricing, file uploads</li>
              <li><code>/frontend</code> – React SPA with quote calculator & chatbot</li>
              <li><code>/uploads</code> – Secure folder for documents</li>
              <li><code>Dockerfile</code> & <code>docker-compose.yml</code> – DevOps stack</li>
              <li><code>.b64</code> certs – For secure 2C2P integration</li>
            </ul>
          </Col>
        </Row>
        <div className="text-center">
          <a
            href="https://github.com/jackkyboy/cheetah-insurance-app"
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔍 View GitHub Repository
          </a>
        </div>
      </section>
    </Container>
  </section>
);

export default About;
