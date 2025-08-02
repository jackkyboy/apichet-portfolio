// 📁 src/components/GitHubProjects.jsx
import React from "react";
import { Container } from "react-bootstrap";
import "./GitHubProjects.css";

const categorizedProjects = {
  "Production Apps": [
    {
      name: "cheetah-insurance-app",
      desc: "ระบบเปรียบเทียบราคาประกันรถยนต์แบบ real-time พร้อม API",
      tech: "Python, Flask, PostgreSQL",
    },
    {
      name: "APIcheetah",
      desc: "สร้างและจัดการ API เชื่อมระบบประกัน",
      tech: "FastAPI, PostgreSQL",
    },
    {
      name: "OOCR-Ebook",
      desc: "แปลง PDF เป็นข้อความแบบอัตโนมัติ",
      tech: "Pdfplumber, Tesseract",
    },
    {
      name: "solana-arbitrage-bot",
      desc: "บอทตรวจจับราคา Arbitrage บน Solana DEX",
      tech: "JavaScript, Crypto APIs",
    },
  ],

  "Machine Learning / AI": [
    {
      name: "LottoFieldTheory",
      desc: "ML วิเคราะห์หวยไทยด้วย Quantum-Inspired Model 🤯",
      tech: "Python, Numpy, Pandas",
    },
    {
      name: "PredictionNFLX",
      desc: "วิเคราะห์และพยากรณ์ราคาหุ้น Netflix",
      tech: "Python, Pandas, Matplotlib",
    },
    {
      name: "PCA_iris / k-means-clustering",
      desc: "โค้ดเบสพื้นฐานด้าน Clustering & Dimensionality Reduction",
      tech: "Scikit-learn",
    },
  ],

  "Web Scraping & Data": [
    {
      name: "Web Scraping Projects",
      desc: "ดึงข้อมูล HTML/JS จากเว็บไซต์ประกันและพาร์ทเนอร์",
      tech: "Selenium, BeautifulSoup",
    },
    {
      name: "web-scraper-python",
      desc: "ดึงข้อมูลจากหน้าเว็บต่าง ๆ",
      tech: "BeautifulSoup, Requests",
    },
    {
      name: "HeyGooddy + simple-data-heygooddy",
      desc: "โน้ตบุ๊กวิเคราะห์ข้อมูลจากเว็บ TQM และข่าวต่าง ๆ",
      tech: "Python, Jupyter",
    },
  ],

  "Visualization & Utilities": [
    {
      name: "Tips_matplotlib",
      desc: "เคล็ดลับการสร้าง Visualization ที่ดูดี",
      tech: "Matplotlib",
    },
    {
      name: "Clock_JS",
      desc: "สร้างนาฬิกาดิจิทัลด้วย JavaScript",
      tech: "HTML/CSS/JS",
    },
  ],

  "Creative & Experimental": [
    {
      name: "blockchain-pytesseract",
      desc: "ทดลองใช้ OCR กับ Blockchain Data",
      tech: "Python, Tesseract OCR",
    },
    {
      name: "Breeding-crocodiles-by-observing-the-nose",
      desc: "(สุดครีเอทีฟ!) Notebook สำรวจการเพาะพันธุ์จระเข้ 🐊",
      tech: "Jupyter Notebook",
    },
  ],

  
};

const GitHubProjects = () => (
  <section id="projects-github">
    <Container>
      <h2>🧠 Technical Projects (GitHub Highlights)</h2>

      {Object.entries(categorizedProjects).map(([category, items], index) => (
        <div key={index} className="mb-5">
          <h4 className="mb-3">{category}</h4>
          <div className="github-project-list">
            {items.map((proj, idx) => (
              <div key={idx} className="github-project-card">
                <h5>{proj.name}</h5>
                <p>{proj.desc}</p>
                <small>{proj.tech}</small>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h5 className="mt-5">📌 อื่น ๆ ที่น่าสนใจ</h5>
      <ul>
        <li><strong>Data Analysis:</strong> TQM-FN, GDP_Europe2007, Titanic_matplotlib, further-analysis</li>
        <li><strong>DevOps & API:</strong> mti-api-learning, Python-Plugin, System-CheeT</li>
        <li><strong>ML Research:</strong> AI, datasets</li>
      </ul>
    </Container>
  </section>
);

export default GitHubProjects;
