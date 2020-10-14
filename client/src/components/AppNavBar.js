import React, { useState, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import RegisterModal from './auth/RegisterModal'

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authContent = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-5">
          <strong>Welcome User</strong>
        </span>
      </NavItem>
      <NavItem>
        <NavLink href="#">Logout</NavLink>
      </NavItem>
    </Fragment>
  );

  const guestContent = (
    <Fragment>
      <NavItem><RegisterModal /></NavItem>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar color="light" dark expand="sm" className="mb-5 custom-navbar">
        <Container>
          <NavbarBrand href="/">KEEP</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {guestContent}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;
