import React, { Component } from 'react';
import { Card, ListGroup,Container,Row, Col } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            id: this.props.match.params.id,
            employee:{}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data})
        })
    }

    render() {
        return (
            <Container>                
                <Row>
                <Col/>
                <Col>
                    <Card style={{width: '30rem', marginTop: '15px'}}>
                        <Card.Header><h3 className="text-center">View Employee Details</h3></Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                Employ First Name: {this.state.employee.firstName}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Employ Last Name: {this.state.employee.lastName}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Employ EmailId: {this.state.employee.emailId}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col/>
                </Row>
            </Container>
        );       
    }
}

export default ViewEmployeeComponent;