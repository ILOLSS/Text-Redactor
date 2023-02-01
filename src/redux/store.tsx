import { createStore } from "redux";
import textStyleReducer from "./reducers/textStyleReducer";

const store = createStore(textStyleReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
