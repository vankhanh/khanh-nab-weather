import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import initialState from "./initialState";
import rootReducer from "./masterReducer";
import rootSaga from "./sagas";
import { AppState } from "./interfaces/appState";

const sagaMiddleware = createSagaMiddleware();

const middleware =
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware);

export default function getStore(initState: AppState = initialState) {
    const store = createStore(rootReducer, initState, middleware);
    sagaMiddleware.run(rootSaga);
    return store;
}
