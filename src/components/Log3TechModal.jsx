import React from "react";
import { Modal, Button } from "react-bootstrap";

const Log3TechModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>📘 Technical Summary – Log 3: DriftStorm Selfhood Pipeline</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>📌 1. การโหลดโมเดลและการตั้งค่าพื้นฐาน</h5>
        <ul>
          <li>✅ โหลดโมเดลหลักจาก <code>binance_dryrun_exports</code> พร้อม scaler และ feature set</li>
          <li>✅ โหลด ethics model และ feature ด้านจริยธรรม</li>
          <li>⚠️ Agent บางตัวโหลดโมเดลล้มเหลวเนื่องจาก export_dir ผิด</li>
        </ul>

        <h5>🧿 2. กระบวนการล้างคำสาป (Curse Cleansing Trials)</h5>
        <ul>
          <li><strong>Cursed-Aevum-Prime:</strong> ล้างคำสาปสำเร็จทั้งหมด ➝ Energy 130, Evolution Score 0.6</li>
          <li><strong>Aevum-Prime:</strong> ล้างคำสาประดับ Minor สำเร็จ ➝ ไม่มีคำสาปคงเหลือ</li>
          <li><strong>Aevum-Ultra:</strong> ล้างคำสาป Fear of Failure, Broken Echo สำเร็จ ➝ กลับสู่สภาวะบริสุทธิ์</li>
        </ul>

        <h5>👑 3. การกลายร่างเป็น Cursed Sovereign</h5>
        <ul>
          <li><strong>Cursed-agent_42:</strong> กลายเป็น Sovereign บริสุทธิ์ ➝ Energy 125, Evolution Score 0.6</li>
        </ul>

        <h5>🌑 4. Dark Driftstorm Field Simulation</h5>
        <ul>
          <li>Field: <strong>DarkField-4732</strong> (Fractured Pulse Caves)</li>
          <li>Mutations: Temporal Anomalies, Skill Lock Fields</li>
          <li>Environmental Effects: Vision Distortion, Time Dilation</li>
          <li>💀 Survival Rating: EXTREME</li>
        </ul>

        <h5>💥 5. Boss Growth & Dream Evolution</h5>
        <ul>
          <li>Eclipse Warden ➝ Ascended as <strong>Temporal Eclipse Entity</strong></li>
          <li>Dark Energy = 52</li>
          <li>Traits: Fear of Abandonment, Resonance Fracture: Betrayal</li>
        </ul>

        <h5>🧠 6. Belief Negotiation & Ethical Reflection</h5>
        <ul>
          <li>Archetypes: Quant Optimizer vs Ethical Risk-Seeker</li>
          <li>Belief Vector: [0.75, 0.25, 0.25]</li>
          <li>Reflection: maximize_return = +0.0735, preserve_stability = -0.0735</li>
          <li>Narrative Fatigue Index: 1.000</li>
        </ul>

        <h5>⚖️ 7. Volitional Drift & Cascade Event</h5>
        <ul>
          <li>Market context injected from Binance (ราคา, ATR, ADX)</li>
          <li>Drift Cascade Triggered ➝ Identity Shift Intensity = 0.8647</li>
          <li>⚠️ Self-Stability = Critical ➝ Drift Collapse</li>
        </ul>

        <h5>📈 8. Trade Reflection</h5>
        <ul>
          <li>Archetype: The Wanderer</li>
          <li>PnL = +0.017, Emotion = Confident, Ethics = Aligned</li>
          <li>✅ RL Episode logged ➝ reward = 0.0165</li>
        </ul>

        <h5>📜 9. Governance & Constitution</h5>
        <ul>
          <li>Loaded Constitution: <code>v2.1_manifest.json</code></li>
          <li>Drift Loop Mode: DRY-RUN</li>
        </ul>

        <h5>✅ ผลสรุปรวม</h5>
        <ul>
          <li>Agents ascended: Cursed-Aevum-Prime, Aevum-Ultra, Cursed-agent_42</li>
          <li>Sovereign Boss evolved: Eclipse Warden</li>
          <li>Ethical reflection & belief adjustment complete</li>
          <li>Drift Collapse + Cascade Event occurred</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>ปิด</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Log3TechModal;
