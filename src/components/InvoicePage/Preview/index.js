import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Document, Page, pdfjs } from 'react-pdf';
import { getHeaderData, getFormattedDate, getInvoiceBody } from '../../../util/TableUtil';

const Preview = ({ invoice }) => {
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
  }

  return (
    <div>
      <button onClick={() => print(doc)}>Print</button>
      <Document file={doc.output('bloburi')}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Preview;
