import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const InvoiceHeader = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('')

  return (
    <React.Fragment>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Customer Name:</Form.Label>
        <Col>
          <Form.Control sm={9}
                        type="text"
                        placeholder="Customer Name"
                        onChange={(e) => setCustomerName(e.target.value)}
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
                        onChange={(e) => setPhoneNum(e.target.value)}
                        value={phoneNum} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column={true} sm={3}>Address:</Form.Label>
        <Col>
          <Form.Control type="text"
                        sm={9}
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.address)}
                        value={address} />
        </Col>
      </Form.Group>
    </React.Fragment>
  );
};
