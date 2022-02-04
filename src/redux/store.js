import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducers";
import {logger} from 'redux-logger'

const middleWares = [logger]
const store = createStore(rootReducer,applyMiddleware(...middleWares))

export default store