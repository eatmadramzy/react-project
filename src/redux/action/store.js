import{createStore} from "redux";
import rootReducers from "./reducer";


const Store =createStore(rootReducers);


export default  Store;