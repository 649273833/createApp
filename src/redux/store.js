import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducerIndex'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
const middleware = [thunk,createLogger()];
const store = createStore(rootReducer, applyMiddleware(...middleware))
export default store