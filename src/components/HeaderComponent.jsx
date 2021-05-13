import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar 
                        bg="dark"
                        variant="dark">
                        <Navbar.Brand href="/">Employee Management App</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Created by : James Jeong
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="#home" className="navbar-brand">Employee Management App</a></div>
                    </nav> */}
                </header> 
            </div>
        );
    }
}

export default HeaderComponent;