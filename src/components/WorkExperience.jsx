// /src/components/WorkExperience.jsx
import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const roles = [
    // 1) Core identity: Cheetah / Tech / AI (current)
    {
      period: "2024 – Present",
      title: "Insurance & Tech Innovator",
      company: "Cheetah Ecosystem (Personal R&D / Product Lab)",
      summary:
        "Designing and building full-stack insurance systems, AI-driven risk engines, and production-grade backend architecture across APIs, data pipelines, and RAG-based insurance knowledge systems.",
      responsibilities: [
        "Architect and maintain the core backend for the Cheetah insurance ecosystem, structured as a large Flask application with 70+ domain-specific blueprints.",
        "Integrate BigQuery as the main pricing backend for real-time car insurance quotations across multiple insurers, with flexible filtering and ranking logic.",
        "Develop and tune API endpoints covering authentication, payments, wallet, claims, OCR, quotes, package gallery, knowledge-base, forum, risk hub, georisk prototype, and more.",
        "Design and implement JWT-based authentication, CORS policy, rate limiting, caching, and centralized logging suitable for production environments.",
        "Build an Insurance Knowledge RAG Engine using SentenceTransformer (intfloat/multilingual-e5-small), Cross-Encoder re-ranker, and ChromaDB as the vector store.",
        "Expose secure Partner APIs (e.g., /api/partner/v1) that allow external partners to consume motor insurance capabilities safely.",
      ],
      techStack: [
        "Python",
        "Flask",
        "Gunicorn",
        "MySQL",
        "BigQuery",
        "Supabase",
        "ChromaDB",
        "SentenceTransformer",
        "JWT",
        "REST API",
      ],
    },

    // 2) Real-world ops: Kerry (current, parallel role)
    {
      period: "2022 – Present",
      title: "Insurance Coordinator",
      company: "Kerry Siam Seaport Limited",
      summary:
        "Parallel role handling real-world port risk, infrastructure damage, claims processing, legal coordination, and insurance program alignment across port operations and subsidiaries.",
      responsibilities: [
        // summary-style bullets from your original About
        "Performed 200+ infrastructure damage surveys and coordinated with legal and insurers for port-related incidents.",
        "Introduced analytics tools (Power BI) to track accident patterns and insurance losses across operations.",
        "Developed incident logging and reporting tools that improved accuracy, response time, and data quality.",
        // expanded detailed JD you provided
        "Assist with full-cycle claim handling including investigation, data collection, verification, analysis, and execution of the claims process.",
        "Track and monitor claim progress to ensure compliance with procedures across Kerry Siam Seaport and its subsidiaries (e.g., Kerry Logistics, KMIT Co., Ltd.).",
        "Conduct on-site damage surveys for cargo at customer factories or warehouses to evaluate the extent and cause of loss.",
        "Assess and document damage to port infrastructure including cranes, RTGs, jetties, high-voltage systems, silos, barges, trucks, steel structures, and storage facilities (e.g., sugar and bulk cargo).",
        "Coordinate with contractors, shipyards, and engineering teams for repairs to infrastructure, high-voltage systems, port cranes (RTGs), barges, trucks, and related equipment.",
        "Liaise with insurance representatives and brokers to ensure existing insurance programs align with risk management needs and new business ventures.",
        "Match existing and new projects with appropriate insurance coverage and structures.",
        "Coordinate with third parties such as clients, lawyers, hospitals, police stations, OIC officials, courts, and relevant departments to support claim investigations and legal procedures.",
        "Support legal proceedings while ensuring safety, proper documentation, and alignment with internal system requirements.",
        "Provide guidance and recommendations on insurance solutions to address operational risk issues in port activities.",
        "Assist in searching, reviewing, and organizing insurance policies relevant to specific projects or operations.",
        "Collaborate with the IT department to design and develop systems for data collection, incident logging, and accident reporting.",
        "Collect, clean, and manage claims and incident data for downstream analysis and reporting.",
        "Analyze claims, risk, and incident data using Power BI and related tools, including infrastructure incidents (e.g., lightning, machinery failure, cargo damage).",
      ],
      techStack: [
        "Risk Analysis",
        "Claims Processing",
        "Incident Reporting Systems",
        "Power BI",
        "Tableau",
        "AppSheet",
        "Google Sheets",
        "MS Office 365",
        "SQL",
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Python",
        "Strategic Thinking",
        "Negotiation & Interpersonal Skills",
        "Data Management",
      ],
    },

    // 3) CTO era at Cheetah
    {
      period: "2021 – 2022",
      title: "CTO & Co-Founder",
      company: "Cheetah Insurance Broker (Motor Insurance Platform)",
      summary:
        "Led the technical and product direction for a real-time car insurance comparison platform, connecting multiple insurers and turning a paper-based insurance journey into a digital self-service experience.",
      responsibilities: [
        "Designed the overall system architecture from database schema and API layer to React frontend and WordPress integration.",
        "Engineered the real-time comparison engine pulling prices from BigQuery, CSV datasets, and external APIs, then normalizing coverage terms across insurers.",
        "Implemented the payment flow using 2C2P (token generation, redirect, webhook) with proper order tracking and payment status handling.",
        "Developed a chatbot / AI assistant connected to BigQuery and a custom knowledge base to explain coverage and suggest insurance packages.",
        "Set up CI/CD basics for deploying backend and frontend to production, managing environment variables and secrets in an organized way.",
        "Acted as both full-stack developer and business strategist in an InsurTech startup model.",
      ],
      techStack: [
        "Python",
        "Flask",
        "FastAPI",
        "React",
        "Node.js",
        "BigQuery",
        "PostgreSQL/MySQL",
        "2C2P",
        "Docker (dev)",
      ],
    },

    // 4) Tokio Marine
    {
      period: "2015 – 2021",
      title: "Head of Claims Control",
      company: "Tokio Marine Insurance",
      summary:
        "Led claims control for motor and general insurance, balancing technical claim assessment, legal escalation, and stakeholder management across brokers, customers, and regulators.",
      responsibilities: [
        "Managed vehicle claim approvals, complex claim cases, and escalation to legal or negotiation tracks where required.",
        "Oversaw day-to-day operations of the claims control team, ensuring service quality and adherence to internal guidelines.",
        "Coordinated with brokers, surveyors, garages, and partners to resolve disputes and align on claim outcomes.",
        "Acted as a key liaison with regulators (e.g., OIC) and courts for disputes involving customers, third parties, or coverage interpretation.",
        "Reviewed claim patterns to identify systemic issues, fraud indicators, and areas for process improvement.",
      ],
      techStack: [
        "Insurance Claims",
        "Team Management",
        "Legal & Regulatory Liaison",
        "Negotiation",
        "Excel",
        "Reporting",
      ],
    },

    // 5) Muangthai
    {
      period: "2012 – 2015",
      title: "Car Insurance Operations",
      company: "Muangthai Insurance",
      summary:
        "Frontline motor insurance operations: policy administration, documentation, and direct customer communication, forming the base layer of practical insurance knowledge.",
      responsibilities: [
        "Handled policy issuance, endorsements, renewals, and policy changes for motor insurance customers.",
        "Communicated with customers and agents regarding coverage details, documentation requirements, and policy status.",
        "Maintained accurate records and documentation to support downstream claims and accounting processes.",
      ],
      techStack: [
        "Motor Insurance Operations",
        "Customer Communication",
        "Policy Administration",
        "MS Office",
      ],
    },
  ];

  const highlightSystems = [
    {
      name: "Cheetah Insurance Backend (70+ API Endpoints)",
      details: [
        "Large Flask-based backend split into domain-specific blueprints: auth, user, admin, payments, wallet, policies, quotes, gallery, OCR, claims, risk, georisk, forum, chatbot, and more.",
        "Runs behind Gunicorn with tuned workers, timeouts, and logging for production workloads.",
        "Centralized configuration for CORS, rate limiting, caching, MAX_CONTENT_LENGTH (20 MB), and error handling.",
      ],
    },
    {
      name: "Insurance Knowledge RAG Engine",
      details: [
        "Uses SentenceTransformer (intfloat/multilingual-e5-small) to generate multilingual embeddings for insurance knowledge cards in Thai and English.",
        "Applies a Cross-Encoder re-ranker to pick the most relevant answer before responding to users.",
        "Stores vectors in ChromaDB on disk with a schema designed for incremental knowledge updates.",
      ],
    },
    {
      name: "Motor Pricing & Gallery API",
      details: [
        "Designed a BigQueryService and routes such as /api/bigquery, /api/gallery, and /api/filter-packages to fetch and rank insurance packages based on user criteria.",
        "Supports multi-step search (brand, model, year, insurance type, repair type) with fallback logic when data is incomplete or no exact match is found.",
      ],
    },
  ];

  return (
    <section id="experience" className="work-experience-section">
      <div className="work-experience-container">
        <header className="work-experience-header">
          <h2>Work Experience & Systems I Build</h2>
          <p>
            I don&apos;t just write code or process claims — I design and operate systems that sit where
            insurance operations, real-world risk, and software actually meet.
          </p>
        </header>

        <div className="work-experience-timeline">
          {roles.map((role, idx) => (
            <article key={idx} className="work-experience-item">
              <div className="work-experience-meta">
                <span className="work-experience-period">{role.period}</span>
              </div>
              <div className="work-experience-content">
                <h3>{role.title}</h3>
                <h4>{role.company}</h4>
                <p className="work-experience-summary">{role.summary}</p>

                <ul className="work-experience-responsibilities">
                  {role.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="work-experience-techstack">
                  {role.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-experience-highlight">
          <h3>Selected Systems I&apos;ve Designed & Built</h3>
          <div className="work-experience-highlight-grid">
            {highlightSystems.map((sys, idx) => (
              <div key={idx} className="work-experience-highlight-card">
                <h4>{sys.name}</h4>
                <ul>
                  {sys.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
