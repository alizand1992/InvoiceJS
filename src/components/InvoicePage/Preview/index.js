import { useState } from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { getFormattedDate } from '../../../util/TableUtil';

import PdfViewer from './PdfViewer';

import { getDocFromInvoice, print } from '../../../util/InvoiceUtil';

const Preview = ({ dirty, invoice, setDirty, uuid }) => {
  const [id] = useState(uuid || uuidv4());
  const [scale, setScale] = useState(2);
  const doc = getDocFromInvoice(invoice);

  const save = () => {
    const localStorage = window.localStorage.getItem('invoices');

    let invoices = {
      savedInvoices: {},
    };

    if (localStorage) {
      invoices = JSON.parse(localStorage);
    }
    invoice.date = getFormattedDate();

    invoices.savedInvoices = {
      ...invoices.savedInvoices,
      [id]: invoice,
    };

    window.localStorage.setItem('invoices', JSON.stringify(invoices));
    setDirty(false);
  }

  return (
    <div>
      <Row>
        <Col md={2} xl={1}>
          <Button onClick={() => print(doc, invoice)}>Print</Button>
        </Col>
        <Col md={2} xl={1}>
          <Button onClick={save} disabled={!dirty}>Save</Button>
        </Col>
        <Col md={4} >
          <Form.Group as={Row} className="justify-content-md-center">
            <Form.Label column={true} md={2}>Size:</Form.Label>
            <Col>
              <Form.Select value={scale} onChange={(e) => {setScale(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <PdfViewer invoice={invoice} />
        </Col>
      </Row>
    </div>
  );
};

export default Preview;
