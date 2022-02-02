import { Alert, Button, Container, Table } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import PreviewModal from './PreviewModal';
import { useState } from 'react';

const SavedInvoices = ({ loadInvoice, id }) => {
  const [show, setShow] = useState(false)
  const [previewId, setPreviewId] = useState(null);

  let invoices = window.localStorage.getItem('invoices');

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

  invoices = JSON.parse(invoices).savedInvoices;

  const hideModal = () => {
    setShow(false);
  };

  const previewInvoice = (id) => {
    setPreviewId(id);
    setShow(true);
  };

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
        {Object.entries(invoices).map((invoice) => {
          const { customerInfo } = invoice[1];
          const id = invoice[0];

          return (
            <tr key={invoice[0]}>
              <td>{customerInfo.project}</td>
              <td>{customerInfo.name}</td>
              <td>Some Date</td>
              <td>
                <Button size="sm" onClick={() => loadInvoice(id)}>Load</Button>&nbsp;
                <Button size="sm" onClick={() => previewInvoice(id)}>Preview</Button>
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
