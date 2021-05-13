import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            id: this.props.match.params.id,
            firstName: '',
            lastname: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => '+ JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });        
    }

    cancel(){
        this.props.history.push('/employees');
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    } 

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    render() {
        const divStyle = {
            marginLeft : '10px',
            marginRight : '10px',
        };

        const divvStyle = {
            marginLeft : '10px',
            marginBottom : '10px'
        };
        
        return (
            <Container>                
                <Row>
                <Col/>
                <Col>
                <Card style={{width: '30rem', marginTop: '15px'}}>
                    <Card.Header><h3 className="text-center">Update Employee</h3></Card.Header>
                    <Form>
                        <Form.Group style={divStyle} controlId="formFirstName">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" value={this.state.firstName} 
                                onChange={this.changeFirstNameHandler} />
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formLastName">
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text"  value={this.state.lastName}
                                onChange={this.changeLastNameHandler}/>
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email"  value={this.state.emailId}
                                onChange={this.changeEmailHandler}/>
                        </Form.Group>
                    </Form>
                    <div>
                        <Button style={divvStyle} variant="primary" onClick={this.updateEmployee}>Save</Button>{' '}
                        <Button style={divvStyle} variant="danger" onClick={this.cancel}>Cancel</Button>{' '}
                        <br/>
                    </div>
                </Card>
                </Col>
                <Col/>
                </Row>
            </Container>
        );
    }
}

export default UpdateEmployeeComponent;