import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const OrdersList = ({ orderList }) => {
    const renderData = () => {
        return orderList.map((data, index) => {
            return (
                <Card key={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className="text-primary font-weight-bold">
                        {data.firstName} {data.lastName}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                        <Card.Body>
                            <Card.Text>Email: {data.email}</Card.Text>
                            <Card.Text>Phone Number: {data.phoneNumber}</Card.Text>
                            <Card.Text>Pizza Type: {data.pizzaType}</Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        });
    }

    return (
        <Container>
            <Container className="mb-4">
                {orderList.length ? (<Accordion>
                    {renderData()}
                </Accordion>) : (<p>No Orders</p>)}
            </Container>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList
    }
}

export default connect(mapStateToProps)(OrdersList);