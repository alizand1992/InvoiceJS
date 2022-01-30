import { Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar fixe="top">
      <Nav.Link to="/invoice" as={Link}>
        Invoice
      </Nav.Link>
      <Nav.Link to="/saved_invoice" as={Link}>
        <Link to="/saved_invoices">Saved Invoices</Link>
      </Nav.Link>
    </Navbar>
  );
};

export default Menu;
