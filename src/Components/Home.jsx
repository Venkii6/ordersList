import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MakeOrder from './MakeOrder'
import OrdersList from './OrdersList'
import '../Home.css'


const Home = () => {
    const [showMakeOrder, setShowMakeOrder] = useState(false);
    const handleShowMakeOrder = () => setShowMakeOrder(true);
    const handleCloseMakeOrder = () => setShowMakeOrder(false)

    const [showList, setShowList] = useState(false);
    const handleShowList = () => setShowList(true);
    const handleCloseList = () => setShowList(false)

    return (
        <div className="wrapper">
            <Button xs="12" className="mr-3" onClick={handleShowMakeOrder}>
                Make Order
            </Button>
            <Button xs="12" onClick={handleShowList}>
                Orders
            </Button>

            <Modal show={showMakeOrder} onHide={handleCloseMakeOrder}>
                <Modal.Header closeButton>
                    <Modal.Title>Make Order</Modal.Title>
                </Modal.Header>
                <MakeOrder handleCloseMakeOrder={handleCloseMakeOrder}/>
            </Modal>

            <Modal show={showList} onHide={handleCloseList}>
                <Modal.Header closeButton>
                    <Modal.Title>Orders List</Modal.Title>
                </Modal.Header>
                <OrdersList />
            </Modal>

        </div>
    );

}

export default Home;