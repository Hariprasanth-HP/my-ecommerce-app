import { createStore } from "redux";
import cartReducer from "./cartPage/reducer";

const store = createStore(cartReducer);

export default store;
