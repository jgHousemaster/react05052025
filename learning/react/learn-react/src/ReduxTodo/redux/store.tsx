import { legacy_createStore, applyMiddleware } from "redux";
import taskReducer from "./reducer";
import {thunk} from 'redux-thunk'

const store = legacy_createStore(taskReducer, applyMiddleware(thunk));
export default store;
