import { jsPDF } from 'jspdf';
import { Document, Page, pdfjs } from 'react-pdf';

const Preview = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const doc = new jsPDF();
  doc.table(10, 10, [{ '#': '1', 'Description': 'Hello World' }], ['#', 'Description'], { autoSize: true })

  return (
    <div>
      <Document file={doc.output('bloburi')}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
};

export default Preview;