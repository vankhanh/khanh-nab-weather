import { takeEvery, call, put } from "redux-saga/effects";

import { getLocationWeather } from "../../../../apis";
import {
    IFetchLocationWeathersRequestedAction,
    ILocationWeathers,
} from "../../../../interfaces/locationWeathers";
import { ActionTypeKeys } from "../actions/actionTypes";
import {
    fetchLocationWeathersFinishedAction,
    fetchWeathersOnLocationFailed,
} from "../actions/locationWeathers";

export function* handleLocationWeatherRequested(action: IFetchLocationWeathersRequestedAction) {
    try {
        const {
            payload: { locationId },
        } = action;

        const locationWeathers: ILocationWeathers = yield call(getLocationWeather, locationId);
        yield put(fetchLocationWeathersFinishedAction(locationWeathers));
    } catch (error) {
        yield put(fetchWeathersOnLocationFailed(error));
    }
}

export default function* locationWeathersWatcher() {
    yield takeEvery(ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED, handleLocationWeatherRequested);
}
