import React, { Component } from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar>
      <navbar-inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Squarespace</a>
      </Navbar.Brand>

    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup className="place">
          <FormControl type="text" placeholder="SEARCH FOR A DOMAIN" />
        </FormGroup>{' '}
        <Button type="submit">GET STARTED</Button>
      </Navbar.Form>
    </Navbar.Collapse>
    </navbar-inverse>
  </Navbar>
    )
  }
}
