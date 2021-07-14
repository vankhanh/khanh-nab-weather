import { all } from "redux-saga/effects";

import weatherForecastWatcher from "./modules/weatherForecast/stores/sagas";

export default function* rootSaga() {
    yield all([weatherForecastWatcher()]);
}
