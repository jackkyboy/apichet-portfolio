import React from "react";
import { Card, Button } from "react-bootstrap";

const BlogCard = ({ title, excerpt, date, url }) => (
  <Card className="h-100 shadow-sm blog-card">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      <Card.Text>{excerpt}</Card.Text>
      <Button
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline-primary"
      >
        Read More
      </Button>
    </Card.Body>
  </Card>
);

export default BlogCard;
