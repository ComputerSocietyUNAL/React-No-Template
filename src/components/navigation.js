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
                <Navbar light expand="md" right>
                <div className="container" style={{height:'6vh'}}>
                    <NavbarToggler right onClick={this.toggleNav} className="NavBtn"/>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/assets/logo/logo.png" alt="logo" height="30" width="auto" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="NavMenu">
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/home"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/solhidrex"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Solhidrex
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/labinpina"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Labinpina
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/laxium"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Laxium
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/dimenol"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Dimenol
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/diarrea"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Diarrea
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                className="nav-link" 
                                to="/contactUs"
                                onClick={this.closeNavbar}
                                activeStyle={{color:"#01B6B8"}}>
                                    Contacto
                                </NavLink>
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