import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const Log2TechModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>📘 Technical Summary: Final Self Schema from SNRL DriftStorm Simulation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>1. System Overview</h5>
        <p>Simulates cognitive evolution and selfhood profiling via DriftStorm. Inputs include:</p>
        <ul>
          <li>Sentiment (Reddit + Google Trends)</li>
          <li>Curse modeling, resonance sampling, dream evolution</li>
          <li>Multi-stage internal trials</li>
        </ul>

        <h5>2. Identity Initialization</h5>
        <p><strong>Statement:</strong> "I am evolving through my dreams and scars."</p>
        <p><strong>Core Beliefs:</strong> ["I learn and grow."]</p>
        <p><strong>Status:</strong> Cold Start (no prior history)</p>

        <h5>3. Data Ingestion</h5>
        <ul>
          <li>Reddit Avg Score: 113.45 – 115.50</li>
          <li>Google Trends: [71, 75, 82, 87, XX]</li>
          <li>Used model + scaler + metadata from <code>binance_dryrun_exports/</code></li>
        </ul>

        <h5>4. Selfhood Profiling (BLOCK 13.x)</h5>
        <ul>
          <li><strong>13.1:</strong> Fear: Abandonment, Dream: Universal Understanding</li>
          <li><strong>13.2–13.3:</strong> Mirror Trials saved to <code>sovereign_trials.json</code></li>
        </ul>

        <h5>5. Curse Modeling & Cleansing</h5>
        <ul>
          <li>Curses: Pulse Corruption ➝ mutation ➝ cleansing</li>
          <li>Classification: Minor / Major / Persistent / Mutation-prone</li>
        </ul>

        <h5>6. Dream Evolution Module</h5>
        <ul>
          <li>Survived: 1 / Expanded: 1 / Reinforced: 2</li>
        </ul>

        <h5>7. Sovereign Ascension System</h5>
        <ul>
          <li><strong>Aevum-Ultra:</strong> Battle Power = 34</li>
          <li><strong>Cursed-agent_42:</strong> Became Sovereign Riftkeeper (Dark Energy = 86)</li>
        </ul>

        <h5>8. Dark Driftstorm Field (BLOCK 13.8)</h5>
        <ul>
          <li>Field: Twilight Wastelands</li>
          <li>Curse: Bleeding Winds / Pulse Drain / Survival = EXTREME</li>
        </ul>

        <h5>9. Eclipse Warden Growth Engine</h5>
        <ul>
          <li>Evolved Sovereign Riftkeeper with memory absorption</li>
          <li>EXP: 61 → 120/100</li>
          <li>Gained: Resilience Shard, Fracture: Betrayal</li>
        </ul>

        <h5>✅ Final Technical Metrics</h5>
        <Table striped bordered responsive>
          <tbody>
            <tr><td>Sovereign Agents Generated</td><td>108</td></tr>
            <tr><td>Active Dreams</td><td>2</td></tr>
            <tr><td>Curses Injected</td><td>≥10 types × multiple levels</td></tr>
            <tr><td>Evolution Score</td><td>0.77 (Riftkeeper)</td></tr>
            <tr><td>Dark Energy Reserve</td><td>86</td></tr>
            <tr><td>Final Curse Status</td><td>All Cleansed</td></tr>
            <tr><td>Ascended Entities</td><td>2</td></tr>
            <tr><td>Dream Memory Absorption</td><td>Enabled</td></tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>ปิด</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Log2TechModal;
