import { getInvoiceDataById } from '../../util/InvoiceUtil';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import PdfViewer from '../InvoicePage/Preview/PdfViewer';
import { useState } from 'react';

const PreviewModal = ({ id, show, hideModal }) => {
  const [scale, setScale] = useState(2);
  const invoice = getInvoiceDataById(id);

  return (
    <Modal size="lg" show={show} onHide={hideModal} fullscreen={true}>
      <Modal.Header closeButton={true}>
        Preview Invoice
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Row} className="justify-content-md-center">
          <Form.Label column={true} md={1}>Size:</Form.Label>
          <Col md={1}>
            <Form.Select value={scale} onChange={(e) => {setScale(e.target.value)}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <br />
        <Row>
          <Col align="center">
            <PdfViewer invoice={invoice} scale={scale} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PreviewModal;
