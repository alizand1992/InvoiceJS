import { Alert, Button, Col, Container, Row, Table } from 'react-bootstrap';

const SavedInvoices = () => {
  let invoices = window.localStorage.getItem('invoices');

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

  return (
    <Container>
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
          return (
            <tr>
              <td>{customerInfo.project}</td>
              <td>{customerInfo.name}</td>
              <td>Some Date</td>
              <td>
                <Button size="sm">Load</Button>&nbsp;
                <Button size="sm">Preview</Button>
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
