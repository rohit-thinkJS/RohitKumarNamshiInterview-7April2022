import { combineReducers } from "redux";
import fetchItemsListReducer from "./FetchItemsList/reducer";

const rootReducer = combineReducers({
    shopReducer: fetchItemsListReducer
})

export default rootReducer;