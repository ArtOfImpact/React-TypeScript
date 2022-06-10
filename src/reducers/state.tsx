import { combineReducers, legacy_createStore as createStore } from "redux";
import BodyText from "./BodyText";
import HeaderSearch from './headerSearch'

let reducers = combineReducers({
    header: HeaderSearch,
    body: BodyText,
});

let Store = createStore(reducers);


export default Store;



