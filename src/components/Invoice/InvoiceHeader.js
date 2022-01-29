import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const InvoiceHeader = ({ invoice, setInvoice }) => {
  const { name, project, phoneNum, email, address } = invoice.customerInfo;

  const [projectName, setProjectName] = useState(project || '');
  const [customerName, setCustomerName] = useState(name || '');
  const [customerPhone, setCustomerPhone] = useState(phoneNum || '');
  const [customerEmail, setCustomerEmail] = useState(email || '');
  const [customerAddress, setCustomerAddress] = useState(address || '');

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
                        onChange={(e) => setProjectName(e.target.value)}
                        onBlur={(e) => setInfo('project', e.target.value)}
                        value={projectName} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Customer Name:</Form.Label>
        <Col>
          <Form.Control sm={9}
                        type="text"
                        placeholder="Customer Name"
                        onChange={(e) => setCustomerName(e.target.value)}
                        onBlur={(e) => setInfo('name', e.target.value)}
                        value={customerName} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Phone #:</Form.Label>
        <Col>
          <Form.Control type="tel"
                        sm={9}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Customer Phone Number"
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        onBlur={(e) => setInfo('phoneNum', e.target.value)}
                        value={customerPhone} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>E-Mail:</Form.Label>
        <Col>
          <Form.Control type="email"
                        sm={9}
                        placeholder="E-Mail"
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        onBlur={(e) => setInfo('email', e.target.value)}
                        value={customerEmail} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Address:</Form.Label>
        <Col>
          <Form.Control type="text"
                        sm={9}
                        placeholder="Address"
                        onChange={(e) => setCustomerAddress((e.target.value))}
                        onBlur={(e) => setInfo('address', e.target.value)}
                        value={customerAddress} />
        </Col>
      </Form.Group>
    </React.Fragment>
  );
};
