import React from 'react';
import './header.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from "./navbar/NavBar";



function Headerr(props) {
    return (
      <Container fluid>
        <Row id="header">
          <Col xs="10" md="3" className="col-1 h2">
            <Link to="/" className="link">
              <h1 class="display-5 fw-bold text-center">
                <span class="text-primary">A</span>
                <span class="text-danger">X</span>
                <span class="text-warning">I</span>
                <span class="text-primary">X</span>
                <span class="text-success">A</span>
                <sub>
                  
                  <small class="text-muted display-7x">Techonologies</small>
                </sub>
              </h1>
            </Link>
          </Col>
          <Col xs="2" md="9">
            <NavBar />
          </Col>
        </Row>
      </Container>
    );
}

export default Headerr;