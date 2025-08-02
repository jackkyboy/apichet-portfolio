// src/components/TerminalIntro.jsx
import React, { useEffect, useState } from "react";
import Console from "react-console-emulator";
import "./TerminalIntro.css";

const messages = [
  "Booting Cheetah Insurance System...",
  "🔐 JWT Auth Initialized",
  "📦 Backend: Flask API connected",
  "💳 2C2P Payment Gateway decoded with .b64 certs",
  "📊 BigQuery connected with dynamic insurance pricing",
  "🚀 Frontend React loaded",
  "",
  "✨ Welcome Apichet Janya — CTO | Insurance Architect",
  "📍 Thailand | 10+ years in Risk & Claims Intelligence"
];

const TerminalIntro = () => {
  const [typedMessages, setTypedMessages] = useState([]);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    const typingDelay = 30;
    const lineDelay = 500;

    const typeLine = () => {
      if (currentLine >= messages.length) return;

      const line = messages[currentLine];
      const nextChar = line.slice(0, currentChar + 1);

      setTypedMessages((prev) => {
        const updated = [...prev];
        updated[currentLine] = nextChar;
        return updated;
      });

      if (currentChar < line.length) {
        currentChar++;
        setTimeout(typeLine, typingDelay);
      } else {
        currentLine++;
        currentChar = 0;
        setTypedMessages((prev) => [...prev, ""]);
        setTimeout(typeLine, lineDelay);
      }
    };

    setTypedMessages([""]); // Start with one line
    typeLine();
  }, []);

  return (
    <div className="terminal-container">
      <Console
        noDefaults
        welcomeMessage={typedMessages}
        promptLabel={"Apichet@portfolio:~$"}
        commands={{
          help: {
            description: "List available commands",
            usage: "help",
            fn: () => "Available commands: help, about, skills, github"
          },
          about: {
            description: "Show my profile summary",
            usage: "about",
            fn: () =>
              "Apichet Janya — Risk Consultant, System Developer, and Data Innovator in the Thai insurance space."
          },
          skills: {
            description: "List my top technical skills",
            usage: "skills",
            fn: () =>
              "Python, Flask, React, BigQuery, SQL, Power BI, AppSheet, 2C2P API"
          },
          github: {
            description: "Open GitHub repo",
            usage: "github",
            fn: () =>
              "Visit: https://github.com/jackkyboy/cheetah-insurance-app"
          }
        }}
        autoFocus
        noEcho
      />
    </div>
  );
};

export default TerminalIntro;
