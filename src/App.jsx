import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import GitHubProjects from "./components/GitHubProjects";
import TerminalIntro from "./components/TerminalIntro";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6000); // ⏳ ปิด Intro หลัง 6 วิ
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {showIntro ? (
        <TerminalIntro />
      ) : (
        <>
          <Summary />
          <About />
          <GitHubProjects />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
