import { combineReducers, legacy_createStore as createStore } from "redux";
import BodyText from "./BodyText";
import HeaderSearch from './HeaderSearch'

let reducers = combineReducers({
    header: HeaderSearch,
    body: BodyText,
});

let Store = createStore(reducers);


export default Store;



