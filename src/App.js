import { Col, Container, Row } from 'react-bootstrap';

import Invoice from './components/Invoice';
import Preview from './components/Preview';

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col><Invoice /></Col>
        <Col><Preview /></Col>
      </Row>
    </Container>
  );
}

export default App;
