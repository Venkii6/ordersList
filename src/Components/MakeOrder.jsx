import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import validator from 'validator';
import { connect } from 'react-redux';
import { makeOrder } from '../Redux/Actions'

const pizzaOptions = ["Chicken Pizza", "Veg Pizza", "Non veg Pizza", "Vegan Pizza", "Lamb Pizza", "Becaon Pizza"]

class MakeOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            pizzaType: pizzaOptions[0],
        };
    }

    handleSubmit = () => {
        if (this.enteredDataIsValid()) {
            this.props.makeOrder(this.state);
            this.props.handleCloseMakeOrder();
        }
    }

    handleOnchange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    enteredDataIsValid = () => {
        let isValid = false;
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!this.state.firstName.length) {
            alert("Please enter firstName");
        } else if (!this.state.lastName.length) {
            alert("Please enter lastName");
        } else if (!this.state.email.length) {
            alert("Please enter email");
        } else if (!validator.isEmail(this.state.email)) {
            alert("Please enter valid email");
        } else if (!this.state.phoneNumber.length) {
            alert("Please enter phone number");
        } else if (!pattern.test(this.state.phoneNumber)) {
            alert("Please enter only numbers");
        } else if (this.state.phoneNumber.length != 10) {
            alert("Please enter valid phone number");
        } else {
            isValid = true
        }
        return isValid;
    }

    renderOptions = (options) => {
        return options.map((data,index) => {
            return <option key={index}> {data}</option>;
        });
    };

    render() {
        return (
            <div>
                <Col className="my-2">
                    <Form>
                        <Form.Group >
                            <Form.Label className="text-primary font-weight-bold" >First Name</Form.Label>
                            <Form.Control placeholder="Enter First name" onChange={this.handleOnchange} 
                            name="firstName" className="border-primary" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-primary font-weight-bold">Last Name</Form.Label>
                            <Form.Control placeholder="Enter Last name"  onChange={this.handleOnchange} 
                            name="lastName" className="border-primary"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-primary font-weight-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  onChange={this.handleOnchange} 
                            name="email" className="border-primary"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-primary font-weight-bold">Phone Number</Form.Label>
                            <Form.Control placeholder="Enter phone number" onChange={this.handleOnchange} 
                            name="phoneNumber" className="border-primary" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-primary font-weight-bold">Select pizza</Form.Label>
                            <Form.Control as="select" defaultValue={pizzaOptions[0]} onChange={this.handleOnchange} 
                            name="pizzaType"  className="border-primary">
                                {this.renderOptions(pizzaOptions)}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Submit
                            </Button>
                    </Form>
                </Col>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeOrder: (orderDetails) => dispatch(makeOrder(orderDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeOrder);

