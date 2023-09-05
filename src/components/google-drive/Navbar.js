import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="xl">
      <Navbar.Brand as={Link} to="/">
        Cloud Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="mr-auto" as={Link} to="/user">
          Update User Info or Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
