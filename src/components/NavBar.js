import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link className="btn" to={props.to}>
            {props.text}
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
