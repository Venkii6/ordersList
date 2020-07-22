import { Make_an_Order } from './Constants'

const initialState = {
    orderList: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Make_an_Order: {
            const orderList = state.orderList;
            const newOrderList = [...orderList, action.payload]
            return {
                orderList: newOrderList
            }
        }
        default: return state
    }
}

export default orderReducer;