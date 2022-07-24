import { createStore } from "redux";
import counterReducer from "./Service/Reducers/counterReducers";

export const store = createStore(counterReducer);
