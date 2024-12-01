import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Work.css';

function Work() {
    return (
        <Container fluid className="details text-center py-4" style={{ padding: 0, marginTop: '-96px' }}>
            <Row className="gx-0 flexbox-row" style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                <Col className="work-col">
                    <h2 className="work-header">Have doubts? Call</h2>
                    <h1 className="work-detail">+91 81 486 45 640</h1>
                </Col>
                <Col className="work-col">
                    <h2 className="work-header">We are open from</h2>
                    <h1 className="work-detail">Mon - Sat (7 a.m - 7 p.m)</h1>
                </Col>
                <Col className="work-col">
                    <h2 className="work-header">Further? Drop mail to</h2>
                    <h1 className="work-detail">botcode@gmail.com</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Work;
