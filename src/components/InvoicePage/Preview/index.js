import { useState } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { v4 as uuidv4 } from 'uuid';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import { getHeaderData, getFormattedDate, getInvoiceBody } from '../../../util/TableUtil';

const Preview = ({ uuid, invoice }) => {
  const [id, setId] = useState(uuid || uuidv4());

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });

  doc.rect(0, 0, 215.9, 279.4);

  autoTable(doc, {
    body: getHeaderData(invoice),
  });

  autoTable(doc, {
    head: [
      [
        { content: '#', styles: { halign: 'center' } },
        'Description',
        { content: 'Count', styles: { halign: 'center' } },
        { content: 'Cost', styles: { halign: 'center' } },
        { content: 'Total', styles: { halign: 'center' } }
      ],
    ],
    body: getInvoiceBody(invoice.lines),
  });

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
          <Document file={doc.output('bloburi')}>
            <Page pageNumber={1} />
          </Document>
        </Col>
      </Row>
    </div>
  );
};

export default Preview;
