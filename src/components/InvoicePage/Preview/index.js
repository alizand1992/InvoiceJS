import { useState } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { getFormattedDate } from '../../../util/TableUtil';

import PdfViewer from './PdfViewer';
import { getDocFromInvoice } from '../../../util/InvoiceUtil';

const Preview = ({ uuid, invoice }) => {
  const [id] = useState(uuid || uuidv4());
  const doc = getDocFromInvoice(invoice);

  const print = (doc) => {
    doc.save(`invoice - ${invoice.customerInfo.name} - ${getFormattedDate(true)}`);
  };

  const save = () => {
    const localStorage = window.localStorage.getItem('invoices');

    let invoices = {
      savedInvoices: {},
    };

    if (localStorage) {
      invoices = JSON.parse(localStorage);
    }

    invoices.savedInvoices = {
      ...invoices.savedInvoices,
      [id]: invoice,
    };

    window.localStorage.setItem('invoices', JSON.stringify(invoices));
  }

  return (
    <div>
      <Row>
        <Col>
          <Button onClick={() => print(doc)}>Print</Button>
          &nbsp;
          <Button onClick={save}>Save</Button>
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
