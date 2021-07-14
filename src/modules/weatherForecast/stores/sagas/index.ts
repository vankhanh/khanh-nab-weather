import { all } from "redux-saga/effects";

import locationWeathersWatcher from "./locationWeatherSaga";
import searchWatcher from "./searchSaga";

export default function* weatherForecastWatcher() {
    yield all([searchWatcher(), locationWeathersWatcher()]);
}
