import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css"; // ✅ Your custom styles

const Contact = () => (
  <section id="contact" className="py-5">
    <Container>
      <h2 className="text-center mb-4">📬 Contact Me</h2>

      <Form
        action="https://formspree.io/f/your-form-id" // ✅ Replace with your actual Formspree ID
        method="POST"
      >
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-4">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Type your message here..."
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            🚀 Send Message
          </Button>
        </div>
      </Form>
    </Container>
  </section>
);

export default Contact;
