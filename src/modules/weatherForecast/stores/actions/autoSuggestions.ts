import {
    IAutoSuggestionsClearAction,
    IAutoSuggestionsFailedAction,
    IAutoSuggestionsFinishedAction,
    IAutoSuggestionsRequestedAction,
} from "../../../../interfaces/autoSuggestions";
import { IErrorWrapper } from "../../../../interfaces/error";
import { ILocation } from "../../../../interfaces/location";

import { ActionTypeKeys } from "./actionTypes";

export function fetchSuggestionsRequestedAction(location: string): IAutoSuggestionsRequestedAction {
    return {
        type: ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED,
        payload: {
            location,
        },
    };
}

export function fetchSuggestionsFinishedAction(locationItems: ILocation[]): IAutoSuggestionsFinishedAction {
    return {
        type: ActionTypeKeys.FETCH_SUGGESTIONS_FINISHED,
        payload: {
            locationItems,
        },
    };
}

export function fetchSuggestionsFailedAction(error: IErrorWrapper): IAutoSuggestionsFailedAction {
    return {
        type: ActionTypeKeys.FETCH_SUGGESTIONS_FAILED,
        payload: {
            error,
        },
    };
}

export function clearSuggestionsAction(): IAutoSuggestionsClearAction {
    return {
        type: ActionTypeKeys.CLEAR_SUGGESTIONS,
        payload: {
            locationItems: [],
        },
    };
}
