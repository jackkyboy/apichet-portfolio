import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="py-5">
    <Container>
      <h2 className="mb-4 text-center">🛠️ Key Projects</h2>
      <Row>
        {/* Project 1: Cheetah */}
        <Col md={6} className="mb-4">
          <Card className="project-card h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Cheetah Insurance Broker</Card.Title>
              <Card.Subtitle className="mb-2">
                React • Flask • BigQuery • 2C2P
              </Card.Subtitle>
              <Card.Text>
                Full-stack web platform for real-time car insurance comparison and purchase.
                Developed front-to-back including quote engine, payment integration, and SEO optimization.
              </Card.Text>
              <Card.Link
                href="https://cheetahinsurancebroker.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Visit Website
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 2: Claims Dashboard */}
        <Col md={6} className="mb-4">
          <Card className="project-card h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Claims Analysis Dashboard</Card.Title>
              <Card.Subtitle className="mb-2">
                Python • Pandas • Google Sheets
              </Card.Subtitle>
              <Card.Text>
                Built a live analytics tool for auto claims data. Visualizes resolution time, risk trends, and claim severity using real-time spreadsheet sync.
              </Card.Text>
              <Card.Link href="#" onClick={(e) => e.preventDefault()}>
                🔒 Demo not public
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 3: Driftstorm */}
        <Col md={6} className="mb-4">
          <Card className="project-card h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Driftstorm AI Simulation</Card.Title>
              <Card.Subtitle className="mb-2">
                Python • XGBoost • Simulation Engine
              </Card.Subtitle>
              <Card.Text>
                An experimental AI system simulating self-aware agents in ethical, emotional, and risk-driven environments. Includes belief modeling, Curse System, and Mirror Trials.
              </Card.Text>
              <Card.Link href="#" onClick={(e) => e.preventDefault()}>
                🛠️ In Progress
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Projects;
