import { takeLatest, call, put } from "redux-saga/effects";

import { ILocation } from "../../../../interfaces/location";
import { ActionTypeKeys } from "../actions/actionTypes";
import { getLocation } from "../../../../apis";
import { IAutoSuggestionsRequestedAction } from "../../../../interfaces/autoSuggestions";
import { fetchSuggestionsFailedAction, fetchSuggestionsFinishedAction } from "../actions/autoSuggestions";

export function* handleFetchSuggestionsRequested(action: IAutoSuggestionsRequestedAction) {
    try {
        const {
            payload: { location },
        } = action;

        const locationItems: ILocation[] = yield call(getLocation, location);

        yield put(fetchSuggestionsFinishedAction(locationItems));
    } catch (error) {
        yield put(fetchSuggestionsFailedAction(error));
    }
}

export default function* searchWatcher() {
    yield takeLatest(ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED, handleFetchSuggestionsRequested);
}
