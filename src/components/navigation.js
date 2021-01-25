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
        this.closeNavbar= this.closeNavbar.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    closeNavbar(){
        if(this.state.collapsed !== true){
            this.toggleNav();
        }
    }
    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md" right>
                <div className="container" style={{height:'6vh'}}>
                    <NavbarToggler right onClick={this.toggleNav} className="NavBtn"/>
                    <NavbarBrand className="mr-auto" href="/">
                        {/* <img src="/assets/logo/logo.png" alt="logo" height="30" width="auto" /> */}
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="NavMenu">
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link nav-title" to="/home">                               
                                    {/* <span className="fa fa-home fa-lg" ></span> */} Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link nav-text" 
                                to="/solhidrex"
                                onClick={this.closeNavbar}>Solhidrex</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link nav-text" 
                                to="/labinpina"
                                onClick={this.closeNavbar}>Labinpina</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link nav-text" 
                                to="/laxium"
                                onClick={this.closeNavbar}>Laxium</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link nav-text" 
                                to="/dimenol"
                                onClick={this.closeNavbar}>Dimenol</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link nav-text" 
                                to="/diarrea"
                                onClick={this.closeNavbar}>Diarrea</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link nav-text" 
                                to="/contactUs"
                                onClick={this.closeNavbar}>Contacto</NavLink>
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