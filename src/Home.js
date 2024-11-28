import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container fluid className="p-0" id="home">
      <br />
      <div className="Home d-flex align-items-center text-light text-center text-md-start" style={{ minHeight: '88vh', backgroundImage: 'url("hei.webp")', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '5px' }}>
        <Container className="py-5">
          <Row className="justify-content-center justify-content-md-start">
            <Col md={6}>
              <div className="left bg-transparent bg-opacity-50 p-4 rounded" style={{ marginTop: '2px', fontFamily: 'Poppins, sans-serif' }}>
                <p style={{ fontSize: '22px', fontWeight: '930', letterSpacing: '0.2px' }}>
                  WE ARE THE BEST LAUNDRY SERVICE PROVIDERS FROM SIVAKASI.
                </p>
                <p style={{ fontSize: '17px', fontWeight: '600', letterSpacing: '0.2px' }}>
                  This template is using Adobe Muse making it easier to edit, add content, and without having to use the coding in the edit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Home;
