import React from "react";
import { Container } from "react-bootstrap";
import "./summary.css";

const Summary = () => (
  <section id="summary" className="py-5 summary-section">
    <Container className="summary-container">
      <h2 className="mb-4 text-center">Professional Summary</h2>
      <p>
        I'm an insurance and risk management specialist with over <strong>10 years of hands-on experience</strong> in underwriting, claims processing, and cross-functional coordination. My background spans respected companies like <strong>Muang Thai Insurance</strong>, <strong>Tokio Marine</strong>, and <strong>Kerry Siam Seaport</strong>, where I led claims teams, assessed complex risks, and collaborated across legal and operational departments.
      </p>
      <p>
        Over the past few years, I’ve transitioned into the world of <strong>technology and data analytics</strong> — applying tools like <strong>React</strong>, <strong>Flask</strong>, and <strong>BigQuery</strong> to modernize insurance workflows and create smarter systems.
      </p>
      <p>
        I'm currently building <strong>Cheetah Insurance Broker</strong>, a web-based platform designed to make car insurance comparison faster, clearer, and more transparent. It's a hands-on project where I wear multiple hats: business analyst, developer, and product owner — all driven by a desire to blend traditional insurance wisdom with modern tech.
      </p>
    </Container>
  </section>
);

export default Summary;
