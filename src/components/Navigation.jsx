import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OrderForm from "./OrderForm";
import { FaCartShopping } from "react-icons/fa6";

const styles = {
  display: "flex",
  gap: "5px",
  alignItems: "center",
};

const Navigation = ({ isAuthenticated, onLogout }) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#C2A8E1" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              width="40"
              height="40"
              className="d-inline-block align-top logo-img"
              src="/logo.svg"
              alt="Craftmyplate logo"
            />
            Craft My Plate
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/order">
                  Place Order
                </Nav.Link>
              </>
            ) : null}
          </Nav>

          <Nav className="ml-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/orders">
                  <span style={styles}>
                    <FaCartShopping />
                    Your Orders
                  </span>
                </Nav.Link>
                <Nav.Link as="button" onClick={onLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
