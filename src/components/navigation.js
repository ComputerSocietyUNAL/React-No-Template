import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './navigation.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md" right>
                <div className="container" style={{height:'6vh'}}>
                    <NavbarToggler right onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        {/* <img src="assets/images/logo.png" alt="logo" height="30" width="41" /> */}
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link nav-title" to="/home">                               
                                    {/* <span className="fa fa-home fa-lg" ></span> */} Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-text" to="/solhidrex">Solhidrex</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-text" to="/labinpina">Labinpina</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-text" to="/laxium">Laxium</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-text" to="/dimenol">Dimenol</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-text" to="/diarrea">Diarrea</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-text" to="/contacto">Contacto</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;