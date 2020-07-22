import React from 'react';
import { Accordion, Card, Container, Row } from 'react-bootstrap';

const dataList = [{
    firstName: "koyal",
    lastName: "megha",
    email: "sireesha@gmail.com",
    phoneNumber: "0737772243",
    pizzaType: "Veg Pizza",
}, {
    firstName: "venkata",
    lastName: "krishna",
    email: "venkat@gmail.com",
    phoneNumber: "078882243",
    pizzaType: "Non Veg Pizza",
}];

const OrdersList = () => {

    const renderData = () => {
        return dataList.map((data,index) => {
            return (
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
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
              {dataList.length ? (<Accordion>
                    {renderData()}
                </Accordion>) : (<p>No Orders</p>)}
                
            </Container>
        </Container>

    );
}

export default OrdersList;