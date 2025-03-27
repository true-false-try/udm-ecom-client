import {createStore} from "react-redux"
import counterReducer from "./reducers/counterReducer.js";

const store = createStore(counterReducer);

export default store;