import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

export default class MeetingNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/" className="mr-auto">Roundtable</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Button href="/create" fluid color="primary">New Meeting</Button>{' '}
              </NavItem>
              <NavItem>
                <NavLink href="/">Upcoming Meetings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/minutes">Past Minutes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Settings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
