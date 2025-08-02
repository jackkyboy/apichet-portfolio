import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'; // 👈 เอา Theme เข้ามาใช้ตรงนี้

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
