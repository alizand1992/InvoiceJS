import { Document, Page } from 'react-pdf';
import { getDocFromInvoice } from '../../../util/InvoiceUtil';

const PdfViewer = ({ invoice, scale = 2 }) => {
  const doc = getDocFromInvoice(invoice);

  return (
    <Document file={doc.output('bloburi')} >
      <Page pageNumber={1} scale={scale} />
    </Document>
  );
};

export default PdfViewer;
