import {createStore} from 'redux'
import OrdersReducer from './OrdersReducer' 


const store = createStore(OrdersReducer);


export default store