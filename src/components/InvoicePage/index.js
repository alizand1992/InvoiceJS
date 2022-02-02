import { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Invoice from './Invoice';
import Preview from './Preview';
import { getInvoiceDataById, initialState } from '../../util/InvoiceUtil';

const InvoicePage = ({ id }) => {
  const [invoice, setInvoice] = useState(initialState);

  if (id !== null && invoice === initialState) {
    setInvoice(getInvoiceDataById(id));
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col xl={6} lg={12} md={12}><Invoice invoice={invoice} setInvoice={setInvoice} /></Col>
        <Col xl={6} lg={12} md={12}><Preview invoice={invoice} uuid={id}/></Col>
      </Row>
    </Container>
  );
};

export default InvoicePage
