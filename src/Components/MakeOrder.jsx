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
            pizzaType: "",
        };
    }

    handleSubmit = () => {
        if (this.enteredDataIsValid()) {
            this.props.makeOrder(this.state);
            this.props.handleCloseMakeOrder();
        }
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
        return options.map((data) => {
            return <option> {data}</option>;
        });
    };

    render() {
        return (
            <div>
                <Col className="my-2">
                    <Form>
                        <Form.Group contrlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="Enter First name" onChange={e => this.setState({ firstName: e.target.value })} className="firstName" />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Enter Last name" onChange={e => this.setState({ lastName: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control placeholder="Enter phone number" onChange={this.handleChange} onChange={e => this.setState({ phoneNumber: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="form.PizzaSelection">
                            <Form.Label>Select pizza</Form.Label>
                            <Form.Control as="select" value={pizzaOptions[1]} onChange={e => this.setState({ pizzaType: e.target.value })}>
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

