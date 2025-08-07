// /Users/apichet/Desktop/portfolio/src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import GitHubProjects from "./components/GitHubProjects";
import TerminalIntro from "./components/TerminalIntro";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogDetail from "./pages/BlogDetail";
import QuantumAITradingBlog from "./components/QuantumAITradingBlog"; // ✅ เพิ่มตรงนี้

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const ProfileHome = () => (
    <>
      <Summary />
      <About />
      <BlogList />
      <GitHubProjects />
      <Projects />
      <Contact />
      <Footer />
    </>
  );

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={showIntro ? <TerminalIntro /> : <ProfileHome />} />
        <Route path="/blog/:lang/:id" element={<BlogDetail />} />
        <Route path="/quantum-ai-blog" element={<QuantumAITradingBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
