import { Make_an_Order } from './Constants'

export const makeOrder = (orderDetails) => {
    return {
    type: Make_an_Order,
    payload: orderDetails
    }
}

