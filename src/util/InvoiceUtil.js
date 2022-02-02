import { pdfjs } from 'react-pdf';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { getHeaderData, getInvoiceBody } from './TableUtil';

export const initialState = {
  customerInfo: {},
  lines: [],
};

export const getInvoiceDataById = (id) => {
  const savedInvoices = JSON.parse(window.localStorage.getItem('invoices')).savedInvoices;

  if (savedInvoices[id]) {
    return savedInvoices[id];
  } else {
    return initialState;
  }
};

export const getAllInvoices = () => {
  return JSON.parse(window.localStorage.getItem('invoices'));
}

export const removeInvoice = (id) => {
  const invoices = getAllInvoices();
  const oldSavedInvoices = invoices.savedInvoices;
  const savedInvoices = {};

  Object.entries(oldSavedInvoices).forEach(([key, value]) => {
    if (key !== id) {
      savedInvoices[key] = value;
    }
  });

  invoices.savedInvoices = savedInvoices;
  window.localStorage.setItem('invoices', JSON.stringify(invoices));
}

export const getDocFromInvoice = (invoice) => {
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

  return doc;
};
