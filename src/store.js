import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./Service/Reducers/todosReduces";

export const store = createStore(todosReducer, applyMiddleware(thunk));
