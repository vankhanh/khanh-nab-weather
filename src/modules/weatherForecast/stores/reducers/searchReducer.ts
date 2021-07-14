import { ILocationAction } from "../actions/location";
import { combineReducers } from "redux";

import { ActionTypeKeys } from "../actions/actionTypes";
import { AutoSuggestionsActions, AutoSuggesstionState } from "../../../../interfaces/autoSuggestions";

function locationReducer(state: string = "", action: ILocationAction): string {
    switch (action.type) {
        case ActionTypeKeys.UPDATED_LOCATION:
            return action.payload.location;
        default:
            return state;
    }
}

const initAutoSuggestState: AutoSuggesstionState = {
    isLoading: false,
    locationItems: [],
    error: new Error(""),
};

function autoSuggestionsReducer(
    state: AutoSuggesstionState = initAutoSuggestState,
    action: AutoSuggestionsActions,
): AutoSuggesstionState {
    switch (action.type) {
        case ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypeKeys.FETCH_SUGGESTIONS_FINISHED:
        case ActionTypeKeys.CLEAR_SUGGESTIONS:
            return {
                ...state,
                locationItems: action.payload.locationItems,
                isLoading: false,
                error: null,
            };
        case ActionTypeKeys.FETCH_SUGGESTIONS_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        default:
            return state;
    }
}

const searchReducer = combineReducers({
    location: locationReducer,
    autosuggestion: autoSuggestionsReducer,
});

export default searchReducer;
