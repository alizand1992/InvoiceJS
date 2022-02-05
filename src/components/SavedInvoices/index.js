import { Alert, Button, Container, Table } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import PreviewModal from './PreviewModal';
import { useState } from 'react';
import { getAllInvoices, getDocFromInvoice, getInvoiceDataById, print, removeInvoice } from '../../util/InvoiceUtil';

const SavedInvoices = ({ loadInvoice, id }) => {
  const [show, setShow] = useState(false)
  const [previewId, setPreviewId] = useState(null);
  const [invoices, setInvoices] = useState(getAllInvoices());

  if (id !== null) {
    return <Navigate to="/invoice" />;
  }

  if (!invoices) {
    return (
      <Container>
        <Alert variant="warning">
          There are no saved invoices yet!
        </Alert>
      </Container>
    );
  }

  const hideModal = () => {
    setShow(false);
  };

  const previewInvoice = (id) => {
    setPreviewId(id);
    setShow(true);
  };

  const deleteInvoice = (id) => {
    if (window.confirm('Are you sure you\'d like to delete this invoice?')) {
      removeInvoice(id);
      setInvoices(getAllInvoices());
    }
  }

  const printInvoice = (id) => {
    const invoice = getInvoiceDataById(id);
    const doc = getDocFromInvoice(invoice);
    print(doc, invoice);
  }

  return (
    <Container>
      <PreviewModal id={previewId} show={show} hideModal={hideModal} />

      <Table striped={true} bordered={true} hover={true}>
        <thead>
        <tr>
          <th>Project Name</th>
          <th>Customer Name</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(invoices.savedInvoices).map((invoice) => {
          const { customerInfo, date } = invoice[1];
          const id = invoice[0];

          return (
            <tr key={invoice[0]}>
              <td>{customerInfo.project}</td>
              <td>{customerInfo.name}</td>
              <td>{date}</td>
              <td>
                <Button size="sm" onClick={() => loadInvoice(id)}>Load</Button>&nbsp;
                <Button size="sm" onClick={() => previewInvoice(id)}>Preview</Button>&nbsp;
                <Button size="sm" onClick={() => printInvoice(id)}>Print</Button>&nbsp;
                <Button size="sm" variant="danger" onClick={() => deleteInvoice(id)}>Delete</Button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </Table>
    </Container>
  )
};

export default SavedInvoices;
