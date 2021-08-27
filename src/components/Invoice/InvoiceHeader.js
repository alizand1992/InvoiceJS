import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const InvoiceHeader = ({ invoice, setInvoice }) => {
  // const [customerName, setCustomerName] = useState('');
  // const [phoneNum, setPhoneNum] = useState('');
  // const [address, setAddress] = useState('')

  const name = invoice.customerInfo.name || '';
  const project = invoice.customerInfo.project || '';
  const phoneNum = invoice.customerInfo.phoneNum || '';
  const email = invoice.customerInfo.email || '';
  const address = invoice.customerInfo.address || '';

  const setInfo = (field, value) => {
    setInvoice({
      ...invoice,
      customerInfo: {
        ...invoice.customerInfo,
        [field]: value
      },
    });
  };

  return (
    <React.Fragment>
      <br />
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Project Name:</Form.Label>
        <Col>
          <Form.Control sm={9}
                        type="text"
                        placeholder="Project Name"
                        onChange={(e) => setInfo('project', e.target.value)}
                        value={project} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Customer Name:</Form.Label>
        <Col>
          <Form.Control sm={9}
                        type="text"
                        placeholder="Customer Name"
                        onChange={(e) => setInfo('name', e.target.value)}
                        value={name} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Phone #:</Form.Label>
        <Col>
          <Form.Control type="tel"
                        sm={9}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Customer Phone Number"
                        onChange={(e) => setInfo('phoneNum', e.target.value)}
                        value={phoneNum} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>E-Mail:</Form.Label>
        <Col>
          <Form.Control type="email"
                        sm={9}
                        placeholder="E-Mail"
                        onChange={(e) => setInfo('email', e.target.value)}
                        value={email} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Address:</Form.Label>
        <Col>
          <Form.Control type="text"
                        sm={9}
                        placeholder="Address"
                        onChange={(e) => setInfo('address', e.target.value)}
                        value={address} />
        </Col>
      </Form.Group>
    </React.Fragment>
  );
};
