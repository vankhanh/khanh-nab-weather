import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { IState } from "../interfaces/state";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import initialState from "./initialState";

const sagaMiddleware = createSagaMiddleware();

const middleware =
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware);

export default function getStore(initState: IState = initialState) {
    const store = createStore(rootReducer, initState, middleware);
    sagaMiddleware.run(rootSaga);
    return store;
}
