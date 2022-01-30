import { Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar fixe="top">
      <Nav.Link to="/invoice" as={Link}>Invoice</Nav.Link>
      <Nav.Link to="/saved_invoices" as={Link}>Saved Invoices</Nav.Link>
    </Navbar>
  );
};

export default Menu;
