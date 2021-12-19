import React, { Component } from "react";
import Profile from "./components/Profile/Profile";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import logo from "./images/logo.png";

export default class NavbarNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isProfileOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.toggleLanding();
  };

  toggleProfile = () => {
    this.setState({
      isProfileOpen: !this.state.isProfileOpen
    });
  };
  render() {
    const {
      records,
      doctors,
      admin,
      profile,
      account,
      username
    } = this.props;
    return (
      <Navbar 
        dark 
        expand="md"
        style={{
          minHeight: '80px',
          padding: 0,
          margin: 0,
          paddingRight: 5,
          backgroundColor: '#add8e6',
        }}
      >
        <NavbarBrand href="/" target="_blank">
          <img src={logo} alt="logo" height="44"
            width="50"
            style={{
              margin: '0 0px 0 20px',
            }} 
          /> <span className="brand_name">RelivAid Hospital</span>
          {/* <h4 className="logoText">HMS</h4> */}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {records && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/patientlist" className="nav">
                  Record Module
                </NavLink>
              </NavItem>
            )}

            {doctors && (
              <NavItem onClick={this.toggle}>
                <NavLink to="/patient_clarking" className="nav">
                  Doctors Module
                </NavLink>
              </NavItem>
            )}

            <NavItem onClick={this.toggle}>
              <NavLink to="/admin" className="nav">
                Admin
              </NavLink>
            </NavItem>
           

            <NavItem className="profile">
              <Profile
                isProfileOpen={this.state.isProfileOpen}
                toggleProfile={this.toggleProfile}
              />
            </NavItem>
            
            <NavItem className="logout">
              <Button color="danger" onClick={this.logout}>
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
