import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastname: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_addEmp'){
           return 
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
            });
        }       
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => '+ JSON.stringify(employee));

        if(this.state.id === '_addEmp'){
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });        
        }
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

    getTitle(){
        if(this.state.id === '_addEmp'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
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
                    <Card.Header>{ this.getTitle() }</Card.Header>
                    <Form>
                        <Form.Group style={divStyle} controlId="formFirstName">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" placeholder="First Name"
                             value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formLastName">
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" placeholder="Last Name" 
                             value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" 
                             value={this.state.emailId} onChange={this.changeEmailHandler}/>
                        </Form.Group>
                    </Form>
                    <div>
                        <Button style={divvStyle} variant="primary" onClick={this.saveOrUpdateEmployee}>Save</Button>{' '}
                        <Button style={divvStyle} variant="danger" onClick={this.cancel}>Cancel</Button>{' '}
                        <br/>
                    </div>
                </Card>
                </Col>
                <Col/>
                </Row>
            </Container>

            // <div>
            //     <div className="container">
            //         <div className="row">
            //             <div className="card col-md-6 offset-md-3 offset-md-3">
            //                 <h3 className="text-center">Add Employee</h3>
            //                 <div className="card-body">
            //                     <form>
            //                         <div className="form-group">
            //                             <label>First Name: </label>
            //                             <input placeholder="First Name" name="firstName" className="form-control"
            //                                 value={this.state.firstName} onChange={this.changeFirstNameHandler} />
            //                         </div>
            //                         <div className="form-group">
            //                             <label>Last Name: </label>
            //                             <input placeholder="Last Name" name="lastName" className="form-control"
            //                                 value={this.state.lastName} onChange={this.changeLastNameHandler} />
            //                         </div>
            //                         <div className="form-group">
            //                             <label>Email Id: </label>
            //                             <input placeholder="Email Address" name="emailId" className="form-control"
            //                                 value={this.state.emailId} onChange={this.changeEmailHandler} />
            //                         </div>
            //                         <button className="btn btn-sucess" onClick={this.saveEmployee}>Save</button>
            //                         <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default CreateEmployeeComponent;