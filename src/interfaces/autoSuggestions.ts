import { ActionTypeKeys } from "../modules/weatherForecast/stores/actions/actionTypes";

import { IAction } from "./action";
import { ErrorState, IErrorAction } from "./error";
import { ILocation } from "./location";

export interface IAutoSuggestionsRequestedPayload {
    location: string;
}
export interface IAutoSuggestionsRequestedAction extends IAction<IAutoSuggestionsRequestedPayload> {
    type: ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED;
}

export interface IAutoSuggestionsFinishedPayload {
    locationItems: ILocation[];
}
export interface IAutoSuggestionsFinishedAction extends IAction<IAutoSuggestionsFinishedPayload> {
    type: ActionTypeKeys.FETCH_SUGGESTIONS_FINISHED;
}

export interface IAutoSuggestionsFailedAction extends IErrorAction {
    type: ActionTypeKeys.FETCH_SUGGESTIONS_FAILED;
}

export interface IAutoSuggestionsClearAction {
    type: ActionTypeKeys.CLEAR_SUGGESTIONS;
    payload: {
        locationItems: [];
    };
}

export type AutoSuggestionsActions =
    | IAutoSuggestionsRequestedAction
    | IAutoSuggestionsFinishedAction
    | IAutoSuggestionsFailedAction
    | IAutoSuggestionsClearAction;

export type AutoSuggesstionState = {
    isLoading: boolean;
    locationItems: ILocation[];
    error: ErrorState;
};

export type SearchState = {
    location: string;
    autosuggestion: AutoSuggesstionState;
};
