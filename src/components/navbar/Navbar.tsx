import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss"




const NavBar = () => {
    
    return(
        <div className="navbar">
            <div className="logo">
                <img src="speedadmin.png" alt="" />
            </div>
            <div className="icons">
                <html>
                <body>

                    <form className="example" action="/search">
                        <input type="text" placeholder="Search..." name="search"/>
                        <button type="submit" ><img src="/search.svg" alt=""></img></button>
                    </form>

                </body>    
                </html>
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="" alt="" />
                    <span></span>
                </div>
                <div className="settings"> 
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/"></Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                
                                <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
            </div>
        </div>
    )

}
export default NavBar;

