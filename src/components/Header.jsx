import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Header.css";

const Header = ({ toggleTheme, theme }) => {
  const isDark = theme === "dark";

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${isDark ? "bg-dark" : "bg-light"}`}
      variant={isDark ? "dark" : "light"}
    >
      <Container fluid="md">
        <Navbar.Brand href="#" className="navbar-brand-custom">
          Apichet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            <Button
              onClick={toggleTheme}
              variant={isDark ? "outline-light" : "outline-dark"}
              size="sm"
              className="ms-3 theme-toggle-btn"
              title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
