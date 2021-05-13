import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class FooterComponent extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="fixed-bottom">
              <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            © Address : 16147 SE 33RD LN, Bellevue, WA 98008
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
        );
    }
}

export default FooterComponent;