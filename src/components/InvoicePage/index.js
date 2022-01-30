import { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Invoice from './Invoice';
import Preview from './Preview';

const InvoicePage = () => {
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
};

export default InvoicePage
