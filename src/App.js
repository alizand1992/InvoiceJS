import { Col, Container, Row } from 'react-bootstrap';

import Invoice from './components/Invoice';
import Preview from './components/Preview';
import { useState } from 'react';

function App() {
  const [invoice, setInvoice] = useState({
    customerInfo: {},
    lines: [],
  });

  return (
    <Container fluid={true}>
      <Row>
        <Col lg={6} md={12}><Invoice invoice={invoice} setInvoice={setInvoice} /></Col>
        <Col lg={6} md={12}><Preview invoice={invoice} /></Col>
      </Row>
    </Container>
  );
}

export default App;
