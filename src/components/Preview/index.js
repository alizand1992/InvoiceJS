import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Document, Page, pdfjs } from 'react-pdf';

const Preview = ({ invoice }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });

  doc.rect(0, 0, 215.9, 279.4)
  autoTable(doc, {
    body: [
      ['Customer Name', invoice.customerInfo.name || ''],
      ['Phone #', invoice.customerInfo.phoneNum || '' ],
      ['Address', invoice.customerInfo.address || '' ],
    ]
  })

  const body = [];
  let total = 0;
  invoice.lines.forEach((line, index) => {
    const lineTotal = line.count * line.cost;
    total += lineTotal;
    body.push([
      { content: index + 1, styles: { halign: 'left' } },
      line.desc,
      { content: line.count, styles: { halign: 'center' } },
      { content: `$${line.cost}`, styles: { halign: 'right' } },
      { content: `$${lineTotal}`, styles: { halign: 'right' } },
    ]);
  });

  body.push([
    { content: 'TOTAL', colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' }},
    { content: `$${total}`, styles: { halign: 'right' } }
  ]);

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
    body
  });

  const print = (doc) => {
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`
    console.log(formattedDate)
    doc.save(`invoice - ${invoice.customerInfo.name} - ${formattedDate}`)
  }

  return (
    <div>
      <button onClick={() => print(doc)}>Print</button>
      <Document file={doc.output('bloburi')}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
};

export default Preview;
