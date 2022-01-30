import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Menu from '../Menu';

const HomePage = () => {
  return (
    <Fragment>
      <Menu />
      <Container fluid={true}>
        <Row>
          <Col md={3}>
          </Col>
          <Col md={9}>

          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomePage;
