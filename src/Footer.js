import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer id="footer" className="bg-dark text-white py-4">
    <Container>
      <Row>
        <Col md={4}>
          <h5>Contact Us</h5>
          <p>Phone: +91 98765 43210</p>
          <p>Email: support@cargarage.com</p>
          <p>Address: 123, Main Street, City</p>
        </Col>
        <Col md={4}>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#services" className="text-white">Services</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Follow Us</h5>
          <p>
            <a href="#" className="text-white me-2">Facebook</a>
            <a href="#" className="text-white me-2">Instagram</a>
            <a href="#" className="text-white">Twitter</a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
