// /Users/apichet/Desktop/portfolio/src/components/Log1TechModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

const Log1TechModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>📘 รายละเอียดเชิงเทคนิค – Log 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>🧠 Feature Engineering:</strong></p>
        <ul>
          <li>ใช้ PCA เพื่อลดมิติจาก 71 ฟีเจอร์ เหลือ 16 หลัก</li>
          <li>สร้างฟีเจอร์แบบ polynomial interaction เช่น volatility * sentiment</li>
          <li>Normalization โดยใช้ Z-Score</li>
        </ul>

        <p><strong>⚙️ Data Augmentation & Balancing:</strong></p>
        <ul>
          <li>ใช้ Quantum-SMOTEV2 เพื่อ balance class BUY / SELL / HOLD</li>
          <li>ปรับ sampling weights ตาม distribution ของ binance volume</li>
        </ul>

        <p><strong>🧩 Meta-Model Stack:</strong></p>
        <ul>
          <li>Base models: XGBoost + LightGBM (optimized via Optuna)</li>
          <li>Meta-model: Logistic Regression บนผลลัพธ์ของ base model</li>
          <li>ใช้ meta-feature เช่น confidence gap ระหว่าง top 2 prediction</li>
        </ul>

        <p><strong>🎯 Training & Validation:</strong></p>
        <ul>
          <li>ใช้ 5-Fold Stratified Cross Validation</li>
          <li>Loss function: multi-logloss</li>
          <li>Validation metric: Macro-F1, AUC, Confusion Matrix</li>
        </ul>

        <p><strong>📈 ผลลัพธ์:</strong></p>
        <ul>
          <li>Meta Accuracy: 94.81%</li>
          <li>Macro F1-score: 0.9427</li>
          <li>AUC (avg): 0.9685</li>
        </ul>

        <p><strong>📂 Artifact ที่ได้:</strong></p>
        <ul>
          <li><code>xgb_model_stacked.json</code></li>
          <li><code>stacking_meta_dataset.csv</code></li>
          <li><code>pca_model.pkl</code></li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>ปิด</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Log1TechModal;
